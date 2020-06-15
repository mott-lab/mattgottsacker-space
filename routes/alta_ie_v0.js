var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/alta_ie_v0/*', function(req, res, next) {
  console.log(req);
  res.sendFile(path.join(__dirname, 'public', 'alta_ie_v0', 'build', 'index.html'));
});

module.exports = router;
