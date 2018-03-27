var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', function(req, res, next) {
    res.render('register', { title: 'Express', layout:null });
});
router.post('/register', function(req, res, next) {

console.log(req.body);

    res.render('register', {   layout:null });
});
router.get('/login', function(req, res, next) {
    res.render('login', {  layout:null });
});

module.exports = router;
