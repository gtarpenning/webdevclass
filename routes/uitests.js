var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('uitests', {
    title: 'express',
    bodytext: ''
  });
});

module.exports = router;
