var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',ensureAuthenticated, function(req, res, next) {
if(req.user.typ === 'Student'){
    res.redirect('/std/');
}
else if(req.user.typ === 'Company'){
    res.redirect('/com/');
}
else{

    console.log(req.user);
    res.render('index', { title: 'Express' });
}

});
router.get('/home', function(req, res, next) {
    //res.redirect('/users/register')
    res.render('index', { title: 'Express' });
});


// Access Control
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('danger', 'Please login');
        res.redirect('/users/login');
    }
}


module.exports = router;
