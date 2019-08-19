var express = require('express');
var router = express.Router();

/* GET bio page. */
router.get('/muhs-comp-prog', function(req, res, next) {
  res.redirect('../lib/comp-prog-website/');
});

module.exports = router;
