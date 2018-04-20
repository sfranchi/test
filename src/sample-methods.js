var exports = module.exports = {};

exports.case = function(req, res, next) {
    
};

exports.math = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({driver:'mongoose', version: req.headers['accept-version']}));
    return next();
};
