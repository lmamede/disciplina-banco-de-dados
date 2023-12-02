var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/homeButton', function(req, res, next) {
  res.render('home', { title: 'Home', page_title: "NBA Season Stats", page_subtitle: "From 2000 to 2020"});
});

router.get('/seasonsButton', function(req, res, next) {
  res.render('seasons', { title: 'Seasons', page_title: "Seasons", page_subtitle: "From 2000 to 2020"})
});

module.exports = router;
