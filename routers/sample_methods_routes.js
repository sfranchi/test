const Router = require('restify-router').Router;  
const router = new Router();
var sample_methods = require('../src/sample-methods');

router.get('/case', sample_methods.case);  
router.get('/math', sample_methods.math);  

module.exports = router;

// server.get('/hello/:name', restify.plugins.conditionalHandler([
// 	{ version: '1.1.4', handler: sendv1 },
// 	{ version: '2.2.3', handler: sendv2 }
//   ]));