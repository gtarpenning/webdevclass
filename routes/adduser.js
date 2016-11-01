var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('blogposts');
  //
  usercollection.insert({
      "author" : {
        "name" : req.body.name,
        "city" : req.body.city,
      },
      "blogpost" : req.body.blogpost,
      "views" : 0,
    });
  console.log('done with the collection');
  res.render('success', {
    title: 'express',
    bodytext: 'You have added a user!'
  });
});

module.exports = router;
