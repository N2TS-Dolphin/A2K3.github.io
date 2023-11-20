var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memories/index', { layout: 'main-layout.hbs'});
});

router.get('/grade10', function(req, res, next) {
  res.render('memories/grade10/index', { layout: 'main-layout.hbs'});
});

router.get('/grade11', function(req, res, next) {
  res.render('memories/grade11/index', { layout: 'main-layout.hbs'});
});

router.get('/grade12', function(req, res, next) {
  res.render('memories/grade12/index', { layout: 'main-layout.hbs'});
});

module.exports = router;
