var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hyewon Joo | Portfolio' });
});

router.get('/resume', function(req, res, next) {
  res.render('cv', { title: 'Hyewon Joo | Portfolio' });
});

router.get('/projects/app', function(req, res, next) {
  res.render('projects-app', { title: 'Hyewon Joo | Portfolio' });
});

router.get('/projects/web', function(req, res, next) {
  res.render('projects-web', { title: 'Hyewon Joo | Portfolio' });
});

router.get('/projects/study', function(req, res, next) {
  res.render('projects-study', { title: 'Hyewon Joo | Portfolio' });
});

module.exports = router;
