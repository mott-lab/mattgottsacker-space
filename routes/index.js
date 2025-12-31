var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'matt gottsacker' });
});

/* GET bio page. */
router.get('/bio', function(req, res, next) {
  res.render('bio', { title: 'matt g: bio' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'matt g: projects' });
});

/* GET interests page. */
router.get('/interests', function(req, res, next) {
  res.render('interests', { title: 'matt g: interests' });
});

/* GET old news page. */
router.get('/oldnews', function(req, res, next) {
  res.render('oldnews', { title: 'matt g: old news' });
});

module.exports = router;
