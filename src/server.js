// Versión 1.0.0.0

require('dotenv-safe').config();
const API_MIN_VERSION = '1.0.0.0';
const API_CURRENT_VERSION = '2.0.0.0';

// Restify server setup
const restify = require('restify');
const restify_errors = require('restify-errors');
const server = restify.createServer({
	name : "Sample API Server v:" + API_CURRENT_VERSION,
	acceptable: ['application/json'],
	versions: [API_MIN_VERSION, API_CURRENT_VERSION],
	version: API_CURRENT_VERSION,
	rejectUnauthorized: true
});
const sqlserver_router = require('../routes/sqlserver_routes');
const mongo_router = require('../routes/mongo_routes');
const sample_methods_router = require('../routes/sample_methods_routes');

// Configure server routing
sqlserver_router.applyRoutes(server, '/sqlserver');
mongo_router.applyRoutes(server, '/mongodb');
sample_methods_router.applyRoutes(server, '/samples');

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

// start the server
server.listen(80, () => {
	console.log('%s listening at %s - Running on \'%s\' environment', server.name, server.url, process.env.NODE_ENV);
})
