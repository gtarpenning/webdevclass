var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'express',
    bodytext: 'Paypal Donation Here!'
  });
});

module.exports = router;
