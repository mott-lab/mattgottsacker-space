var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var bioRouter = require('./routes/bio');
var projectsRouter = require('./routes/projects');
var interestsRouter = require('./routes/interests');

// var compProgWebsiteRouter = require('./routes/comp-prog');
// var digitalNativeRouter = require('./routes/digital-native');
// var livereload = require('express-livereload');
var app = express();
// livereload(app, config={})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bio', bioRouter);
app.use('/projects', projectsRouter);
app.use('/interests', interestsRouter);

app.use(express.static(path.join(__dirname, 'public/alta_ie_v0/build')));

app.get('/alta_ie_v0/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/alta_ie_v0/build/index.html'));
});

app.listen(5000);

// app.use('/muhs-comp-prog', compProgWebsiteRouter);
// app.use('/digital_native', digitalNativeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
