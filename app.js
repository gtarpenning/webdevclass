var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var adduser = require('./routes/adduser');
var like = require('./routes/like');
var delete1 = require('./routes/delete1');
var uitests = require('./routes/uitests');
var AddUserPage = require('./routes/AddUserPage');
var blogPage  = require('./routes/blogPage');

var app = express();

var mongo = require('mongodb');
var monk = require('monk');

var dbaddress = process.env.MONGO_URL;
if (! dbaddress) {
  throw new Error("No MONGO_URL environment variable set!");
}

console.log('Using DB Address: ' + dbaddress);
var db = monk(dbaddress);

// view engine setup
app.set('views', path.join(__dirname, 'views'));

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use('/users', users);
app.use('/adduser', adduser);
app.use('/uitests', uitests);
app.use('/AddUserPage', AddUserPage);
app.use('/blogPage', blogPage);
app.use('/like', like);
app.use('/delete1', delete1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
