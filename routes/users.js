var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('blogposts');
  usercollection.find({"author.city": {$ne: null}}, {}, function (e, userlist) {
     console.log('Hey, we got the userlist back!');
     res.render('users', {
        title: 'Express',
        bodytext: 'This is the users page',
        userlist: userlist,
      });
  //want to dsort as drawing on the page, but obviously sort once done with the entire find function
  });
});

module.exports = router;
