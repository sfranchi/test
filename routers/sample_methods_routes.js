'use strict';

const restify = require('restify');
const Router = require('restify-router').Router;  
const router = new Router();
var sample_methods = require('../src/sample-methods');

router.get('/case/:text',restify.plugins.conditionalHandler([
    {version: ['1.0.0', '1.8.9', '1.9.9'], handler:sample_methods.lowerCase},
    {version: '2.0.0', handler:sample_methods.upperCase} 
])); 

router.get('/math/:a/:b',restify.plugins.conditionalHandler([
    {version: ['1.0.0', '1.5.0'], handler:sample_methods.add},
    {version: ['1.5.1', '1.8.9'], handler:sample_methods.substract},
    {version: '1.9.0', handler:sample_methods.multiply},
    {version: '2.0.0', contentType:['text/html', 'text/html'], handler:sample_methods.divideHTML},
    {version: '2.0.0', contentType:'application/json', handler:sample_methods.divideJSON} 
])); 

module.exports = router;
