var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('blogposts');
  usercollection.find({"blogpost": {$ne: null}}, {sort : {"views": -1} }, function (e, userlist) {
     res.render('blogPage', {
        title: 'Express',
        bodytext: 'This is the blog page',
        userlist: userlist,
      });
  });
});

module.exports = router;
