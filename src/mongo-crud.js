'use strict';

const mongoose = require('mongoose');

var _create = function(req, res, next) {
};

var _retrieve = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.getVersion()}));
    
    return next();
};

var _update = function(req, res, next) {
};

var _delete = function(req, res, next) {
};

module.exports = {
    create: _create,
    retrieve: _retrieve,
    update: _update,
    delete: _delete
}
