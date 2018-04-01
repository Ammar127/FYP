const LocalStrategy  = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load user model
const User = require('../model/user');

module.exports = function(passport){
    passport.use(new LocalStrategy({usernameField: 'email'}, function (email, password, done)  {
        // Match user
        User.findOne({
            email:email
        }).then(function(user) {
            console.log("--------------User found",user);
            if(!user){
                console.log("User not defined --- ",email,password);
                return done(null, false, {message: 'No User Found'});
            }

            // Match password
            bcrypt.compare(password, user.password,function(err, isMatch) {
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                } else {
                    console.log('Password Incorrect',password,user.password);
                    return done(null, false, {message: 'Password Incorrect'});
                }
            })
        })
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}