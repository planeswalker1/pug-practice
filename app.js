const express = require('express');
const logger = require('morgan');

let app = express();

if (app.get('env') === 'development') {
  app.locals.dev = true;
}

// log requests
if (app.locals.dev) {
  app.use(logger('dev'));
}






// catch 404 and pass to error handler
app.use(function (req, res, next) {
  let err = new Error('Page Not Found :(');
  err.status(404);
  next(err);
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