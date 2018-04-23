'use strict';

var exports = module.exports = {};
let appInsights = require("applicationinsights");
const validator = require('fluent-validator');

exports.upperCase = function(req, res, next) {
    var ret = req.params.text.toUpperCase();
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result:ret, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "upperCase", properties: {text: req.params.text}});

    return next();
};

exports.lowerCase = function(req, res, next) {
    var ret = req.params.text.toLowerCase();
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result:ret, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "lowerCase", properties: {text: req.params.text}});

    return next();
};

exports.add = function(req, res, next) {
    var a = req.params.a;
    var b = req.params.b;
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result: a+b, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "add", properties: {a: req.params.a, b: req.params.b}});

    return next();
};

exports.substract = function(req, res, next) {
    var a = req.params.a;
    var b = req.params.b;
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result: a-b, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "substract", properties: {a: req.params.a, b: req.params.b}});
    return next();
};

exports.multiply = function(req, res, next) {
    var a = req.params.a;
    var b = req.params.b;
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result: a*b, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "multiply", properties: {a: req.params.a, b: req.params.b}});
    return next();
};

exports.divide = function(req, res, next) {
    var a = req.params.a;
    var b = req.params.b;
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result: a/b, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "divide", properties: {a: req.params.a, b: req.params.b}});
    return next();
};

exports.divideHTML = function(req, res, next) {
    var a = req.params.a;
    var b = req.params.b;
    res.setHeader('Content-type', 'text/html');
    res.writeHead(200);
    res.end(JSON.stringify({result: a/b, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "divideHTML", properties: {a: req.params.a, b: req.params.b}});
    return next();
};

exports.divideJSON = function(req, res, next) {
    var a = req.params.a;
    var b = req.params.b;
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result: a/b, version: req._version}));
    appInsights.defaultClient.trackEvent({name: "divideJSON", properties: {a: req.params.a, b: req.params.b}});
    return next();
};
