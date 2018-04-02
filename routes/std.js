var express = require('express');
var router = express.Router();
var stdprof =require('../model/std');
var CV =require('../model/CV');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.redirect('/std/build');
    //res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
    //res.redirect('/users/register')
    res.render('std/home');
});
router.get('/prof', function(req, res, next) {
    stdprof.findOne(function (err,prof) {
        if(prof){
            res.render('std/prof',{prof:prof});
        }
        else
            res.redirect('/std/prof');

    });

});
router.get('/editprof', function(req, res, next) {

    stdprof.findOne(function (err,prof) {
        if(prof){
            res.render('std/editprof',{prof:prof});
        }
        else
            res.render('std/editprof');
    });
});
router.post('/editprof', function(req, res, next) {
console.log(req.body);
    stdprof.findOne({std_id:req.user._id},function (err,prof) {
        if(prof){

            prof.Name =req.body.sName,

                prof.Title=req.body.sTitle,
                prof.DOB=req.body.dtp_input2,
                prof.roll= req.body.roll,
                prof.email= req.body.semail,
                prof.Phone=req.body.sPhone,
                prof.cnic=req.body.cnic,
                prof.address=req.body.sAdd,

                prof.about= req.body.about
        }
        else {
            prof = new stdprof({
                std_id: req.user._id,
                Name: req.body.sName,
                cnic:req.body.cnic,
                Title: req.body.sTitle,
                DOB: req.body.dtp_input2,
                roll: req.body.roll
                ,
                email: req.body.semail,
                Phone: req.body.sPhone,

                address: req.body.sAdd,

                about: req.body.about
            });
        }
            prof.save(function(err,prof){
                if(err){
                    return
                }
                else{
                    res.redirect('/std/home');
                }
            });


    });


   // console.log(req.body);
});


router.get('/build', function(req, res, next) {
    //res.redirect('/users/register')
    res.render('std/CVBuild',{layout:null});
});
router.post('/build', function(req, res, next) {

    var ca = new CV(req.body);
    ca.save();
    console.log(req.body);
    res.redirect('/std/home')
    //res.render('std/CVBuild',{layout:null});

});

module.exports = router;
