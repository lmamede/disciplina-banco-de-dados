var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/homeButton', function(req, res, next) {
  res.render('home', { title: 'Home', page_title: "NBA Season Stats", page_subtitle: "From 2000 to 2020"});
});

router.get('/teamsButton', function(req, res, next) {
  res.render('teams', { title: 'Teams', page_title: "Teams", page_subtitle: "The Best"})
});

router.get('/seasonsButton', function(req, res, next) {
  res.render('seasons', { title: 'Seasons', page_title: "Seasons", page_subtitle: "From 2000 to 2020"})
});

router.get('/arenasButton', function(req, res, next) {
  res.render('arenas', { title: 'Arenas', page_title: "Arenas", page_subtitle: "Where the Magic Happens"})
});

router.get('/gamesButton', function(req, res, next) {
  res.render('games', { title: 'Games', page_title: "Games", page_subtitle: "Check the Matches"})
});

module.exports = router;
