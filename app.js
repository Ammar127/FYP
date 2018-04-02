var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose') , flash = require('connect-flash'),expressValidator = require('express-validator');
const bcrypt = require('bcryptjs');


// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect('mongodb://localhost/FYP')
    .then(function(){  console.log('MongoDB Connected...');})
    .catch(function (err) { console.log(err);});



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stdRouter = require('./routes/std');
var comRouter = require('./routes/com');

var app = express();
// Express Validator Middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));
//use flash
app.use(flash());
var hbs = require('hbs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

hbs.registerHelper("equal", require("handlebars-helper-equal"))
hbs.registerPartials(__dirname + '/views/partial');
hbs.registerPartials(__dirname + '/views/std');
hbs.registerPartials(__dirname + '/views/com');
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//use of Passportjs
var session = require("express-session"),
    bodyParser = require("body-parser"),passport=require('passport'), LocalStrategy = require('passport-local').Strategy;


app.use(express.static("public"));
app.use(session({ secret: "cats",resave: true,
    saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
const User = require('./model/user');
passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(username, password, done) {

        // Match Username
        var query = {email:username};
        User.findOne(query, function(err, user){
            if(err) throw err;
            if(!user){
                //req.flash('error_msg', 'No user found');
                return done(null, false,{error_msg: 'No user found'});
            }
            else if(user){

                // Match Passwordaa
                bcrypt.compare(password, user.password, function(err, isMatch){
                    if(err) throw err;
                    if(isMatch){

                        return done(null, user);
                    } else {
                       // req.flash('error_msg', 'No user found');
                        return done(null, false, {error_msg: 'Password is incorrect'});
                    }
                });}
        });
    }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


// Global variables
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg') ;
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
   // console.log(res.locals.user);
    next();
});









app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/std', stdRouter);
app.use('/com', comRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
