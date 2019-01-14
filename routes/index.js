const router = require('express').Router();
const config = require('../app/models/config');

router.get('/', function (req, res, next) {
  return res.render('index');
});

module.exports = router;