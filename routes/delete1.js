var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('blogposts');
  usercollection.findOne({"author.name": req.body.name}, {}, function(e, author){
    usercollection.remove({"author.name": req.body.name})
  })
});

module.exports = router;
