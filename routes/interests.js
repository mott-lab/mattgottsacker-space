var express = require('express');
var router = express.Router();

/* GET interests page. */
router.get('/', function(req, res, next) {
  res.render('interests', { title: 'matt gottsacker: interests' });
});

module.exports = router;
