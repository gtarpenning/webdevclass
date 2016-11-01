var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('AddUserPage', {
    title: 'express',
    bodytext: 'This is where you can add users to the database'
  });
  var db = req.db;
  var usercollection = db.get('blogposts');
  usercollection.insert({
      "author" : {
        "name" : req.query.name,
        "city" : req.query.city,
      },
      "blogpost" : req.query.blogpost,
    });
  });

module.exports = router;
