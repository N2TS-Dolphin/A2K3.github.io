var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('introduction/index', { layout: 'main-layout.hbs'});
});

module.exports = router;
