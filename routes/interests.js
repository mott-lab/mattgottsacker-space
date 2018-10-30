var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('interests', { title: 'mg-space' });
});

module.exports = router;
