var exports = module.exports = {};
const mongoose = require('mongoose');

exports.create = function(req, res, next) {
};

exports.retrieve = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.headers['accept-version']}));
    return next();
};

exports.update = function(req, res, next) {
};

exports.delete = function(req, res, next) {
};

