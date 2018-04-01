var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    req.flash('success_msg', 'You are now registered and can log in');
  res.redirect('/users/login')
  //res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
    //res.redirect('/users/register')
    res.render('index', { title: 'Express' });
});

module.exports = router;
