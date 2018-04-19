// Versión 1.0.0.0

require('dotenv-safe').config();

// Restify server setup
const restify = require('restify');
const restify_errors = require('restify-errors');
const server = restify.createServer({
	name : "Sample API Server v:" + process.env.CURRENT_API_VERSION,
	acceptable: ['application/json'],
	versions: ['1.9.9.9', '2.9.9.9'],
	version: '2.0.0.0',
	rejectUnauthorized: true
});

// Server behaviour configuration
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.throttle({
	burst: 100,
	rate: 50, 
	ip: true
}));

// Server events
server.on('VersionNotAllowed', function (req, res, callback) {
	var err = new restify_errors.BadRequestError('Versión no soportada (%s)', req.headers['accept-version']);
	res.send(err);
});

server.on('uncaughtException', function(req, res, route, err) {
	var err = new restify_errors.InternalServerError('Error inesperado (\'%s\') en ruta \'%s\'', err, route);
	res.send(err);
});

// CRUD methods
function sendv1 (req, res, next) {
	res.setHeader('Content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify({id:1, version: req.headers['accept-version']}));
	return next();
}

function sendv2 (req, res, next) {
	res.setHeader('Content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify({id:2, version: req.headers['accept-version']}));
	return next();
}

server.get('/hello/:name', restify.plugins.conditionalHandler([
	{ version: '1.1.4', handler: sendv1 },
	{ version: '2.2.3', handler: sendv2 }
  ]));

server.get('/ss1/:name', function(req, res, next) {
	res.setHeader('Content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify({version: req.headers['accept-version']}));
	return next();
})

server.get({path: '/ss2/:name', version:'2.0.0'}, (req, res, next) => {
	res.setHeader('Content-type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify({version: req.headers['accept-version']}));
	return next();
})

// start the server
server.listen(80, () => {
	console.log('%s listening at %s - Running on \'%s\' environment', server.name, server.url, process.env.NODE_ENV);
})
