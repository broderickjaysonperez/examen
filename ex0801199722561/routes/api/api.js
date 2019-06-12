var express= require('express');
var router = express.Router();

var recetaRoutes = require('./personas');

router.use('/personas',recetaRoutes);

module.exports = router;