var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hyewon Joo | Software Engineer' });
});

router.get('/projects/app', function(req, res, next) {
  res.render('projects-app', { title: 'Hyewon Joo | App' });
});

router.get('/projects/web', function(req, res, next) {
  res.render('projects-web', { title: 'Hyewon Joo | Web' });
});

router.get('/projects/personal', function(req, res, next) {
  res.render('projects-personal', { title: 'Hyewon Joo | Projects' });
});

router.get('/reference', function(req, res, next) {
  res.render('reference', { title: 'Hyewon Joo | Reference' });
});

module.exports = router;
