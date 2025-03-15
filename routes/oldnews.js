var express = require('express');
var router = express.Router();

/* GET bio page. */
router.get('/', function(req, res, next) {
  res.render('oldnews', { title: 'matt gottsacker: old news' });
});

module.exports = router;
