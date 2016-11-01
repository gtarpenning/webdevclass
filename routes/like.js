var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var db = req.db;
  var usercollection = db.get('blogposts');
  usercollection.findOne({"author.name": req.body.name}, {}, function(e, author){
    usercollection.update(
      {"author.name": req.body.name},
      {
        $set: {"views": parseInt(author.views)+1},
      }
    );
    res.send({"name": ((req.body.name).replace(/\s+/g, '')), "views": (parseInt(author.views)+1)})
  })
});

module.exports = router;
