var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const passport = require('passport');
const User = require('../model/user');
/* GET users listing. */
router.get('/', function (req, res, next) {

    res.redirect('/register');
});
router.get('/register', function (req, res, next) {
    //req.flash('success_msg', 'You are now registered and can log in');
    res.render('register', {title: 'Express', layout: null});
});
router.post('/register', function (req, res, next) {

    console.log(req.body);

    const email = req.body.email;
    const typ = req.body.jobtype;
    const password = req.body.pjp_pass1;
    //const password2 = req.body.password2;
    console.log(email, typ, password);
    req.checkBody('jobtype', 'Type is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('pjp_pass1', 'Password is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        console.log(errors);
        req.flash('error_msg', errors);
        res.redirect('/users/register');
        return;
    }
    else {
        User.findOne({email: email})
            .then(function (user) {
                if (user) {
                    req.flash('error_msg', 'Email already regsitered');
                    res.redirect('/users/register');
                } else {
                    const newUser = new User({
                        typ: typ,
                        email: email,
                        password: password
                    });

                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(newUser.password, salt, function (err, hash) {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(function (user) {
                                    req.flash('success_msg', 'You are now registered and can log in');
                                    res.redirect('/users/login');
                                })
                                .catch(function (err) {
                                    console.log(err);
                                    return;
                                });
                        });
                    });
                }
            });
    }

});
router.get('/login', function (req, res, next) {
    res.render('login', {layout: null});
});
router.post('/login', function (req, res, next) {
    console.log(req.body);
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);

    //res.render('login', {layout: null});
});

// Logout User
router.get('/logout',function (req, res) {
    req.logout();
//req.('success_msg', 'You are logged out');
    res.redirect('/users/login');
});

module.exports = router;
