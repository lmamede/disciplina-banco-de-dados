var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home', page_title: "NBA Season Stats", page_subtitle: "From 2000 to 2020"});
});

module.exports = router;
