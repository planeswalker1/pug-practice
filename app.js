const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const logger = require('morgan');

const config = require('./app/models/config');
const routes = require('./routes/index');

let app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')));

// view engine
app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'pug');

if (app.get('env') === 'development') {
  app.locals.dev = true;
}

// log requests
if (app.locals.dev) {
  app.use(logger('dev'));
}

// setup index route
app.use('/', routes);

// catch 404 and render 404 page
app.use(function (req, res, next) {
  res.render('404');
});

// development error handler
if (app.locals.dev) {
  app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).send();
  });
}

// production error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send();
});

let server = app.listen(config.port, function () {
  console.log('Listening at http://localhost:%s in %s mode', server.address().port, app.get('env'));
});