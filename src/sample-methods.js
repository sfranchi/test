'use strict';

var exports = module.exports = {};
// const restify = require('restify');
const validator = require('fluent-validator');

exports.upperCase = function(req, res, next) {
    var ret = req.params.text.toUpperCase();
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result:ret, version: req.version}));
    return next();
};

exports.lowerCase = function(req, res, next) {
    var ret = req.params.text.toLowerCase();
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({result:ret, version: req.version}));
    return next();
};

exports.add = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.headers['accept-version']}));
    return next();
};

exports.substract = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.headers['accept-version']}));
    return next();
};

exports.multiply = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.headers['accept-version']}));
    return next();
};

exports.divideHTML = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.headers['accept-version']}));
    return next();
};

exports.divideJSON = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.headers['accept-version']}));
    return next();
};