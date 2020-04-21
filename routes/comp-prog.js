var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/muhs-comp-prog', function(req, res, next) {
  console.log(req);
  res.sendFile('lib/comp-prog-website/');
});

module.exports = router;
