var express = require('express');
var router = express.Router();
var stdprof =require('../model/std');
var CV =require('../model/CV');
var Com = require('../model/com');
var Job =require('../model/job');
/* GET home page. */
router.get('/', function(req, res, next) {

    res.redirect('/std/home');
    //res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {

    Job.find(function (err,doc) {
        if(doc){
            res.render('std/home',{doc:doc});
        }
        else
            res.redirect('/std/home');


    });


});
router.get('/fulljob/:id', function(req, res, next) {
    var id = req.params.id;
    Job.findOne({_id:id},function (err,doc) {
        if(doc){
            Com.findOne({com_id:doc.com_id},function (err,itm) {
                console.log(itm);
                res.render('std/fulljob',{doc:doc,item:itm});
            })

        }
        else {
            req.flash('error_msg','Not Found');
            res.redirect('/std/home');
        }

    });


});
router.get('/apply/:id',function (req,res,next) {
    var id = req.params.id;
    Job.findOne({_id:id},function (err,doc) {
        if(doc){
           doc.app.push(req.user.id);
doc.save();
req.flash('success_msg','you Successfully Applied on'+doc.j_title+'')
res.redirect('/std/home');
        }
        else {
            req.flash('error_msg','Not Found');
            res.redirect('/std/home');
        }

    });



});

router.get('/prof', function(req, res, next) {

    stdprof.findOne({std_id:req.user.id},function (err,prof) {
        if(prof){
            res.render('std/prof',{prof:prof});
        }
        else
            res.redirect('/std/prof');

    });

});
router.get('/editprof', function(req, res, next) {

    stdprof.findOne({std_id:req.user.id},function (err,prof) {
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

router.get('/viewcv',function (req,res,next) {
    CV.findOne({stdid:req.user._id},function(err,doc){
        if(!doc){
            req.flash('error_msg','You didn\'t  build any CV , Build One and then view it');
            res.redirect('/std/build');
        }
        else if(doc){
            console.log(doc);
            res.render('std/viewcv',{doc:doc});
        }
    });
});

router.get('/build', function(req, res, next) {

    //res.redirect('/users/home')
    res.render('std/CVBuild',{layout:null});
});

router.post('/build', function(req, res, next) {

   
    CV.findOne({stdid:req.user._id},
        function(err,doc){
            if(doc)
            {
                doc.objective= req.body.objective,
                doc.education=req.body.education,
                doc.projects=req.body.projects,
                doc.experience=req.body.experience,
                doc.skills= req.body.skills,
                doc.achievements= req.body.achievements,
                doc.certifications= req.body.certifications,
                doc.areaOfInterests= req.body.areaOfInterests


            }
            else if (!doc){

                doc = new CV({
                    stdid : req.user._id,
                    objective: req.body.objective,
                    education:req.body.education,
                    projects:req.body.projects,
                    experience:req.body.experience,
                    skills: req.body.skills,
                    achievements: req.body.achievements,
                    certifications: req.body.certifications,
                    areaOfInterests: req.body.areaOfInterests
                } );

            }

            doc.save(function (err) {
                if(err) {

                    console.log(err);
                    res.send('0');
                }
                else
                    res.send('1');
            });

        }
    );



});

module.exports = router;
