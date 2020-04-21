var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/digital_native', function(req, res, next) {
  console.log(req);
  res.sendFile('lib/digital_native/');
});

module.exports = router;
