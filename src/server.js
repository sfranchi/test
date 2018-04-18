require('dotenv-safe').config();

const restify = require('restify');
const restify_errors = require('restify-errors');
const server = restify.createServer({
	name : "Sample API Server v:" + process.env.CURRENT_API_VERSION
});

// Server configuration
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.gzipResponse());

server.on('VersionNotAllowed', function (req, res, next) {
	res.writeHead(400);
	const err = new restify_errors.BadRequestError({message: 'Versión no soportada'});
	res.end(JSON.stringify(err));
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
	console.log('%s listening at %s', server.name, server.url);
})
