const Router = require('restify-router').Router;  
const router = new Router();
var crud = require('../src/sqlserver-crud');

router.post('/entity', crud.create);  
router.get('/entity', crud.retrieve);  
router.put('/entity', crud.update);  
router.del('/entity', crud.delete);  

module.exports = router;