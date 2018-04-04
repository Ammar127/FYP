var express = require('express');
var router = express.Router();

var comprof =require('../model/com');
var stdprof = require('../model/std');
var CV =require('../model/CV');
var Job =require('../model/job');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/com/getjob')
   // res.render('com/home', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
    //res.redirect('/users/register')
    res.render('com/home', { title: 'Express' });
});
router.get('/editprof', function(req, res, next) {

    comprof.findOne({id:req.user.id},function (err,prof) {
        if(prof){
            res.render('com/editprof',{prof:prof});
        }
        else
            res.render('com/editprof');
    });
});
router.get('/prof', function(req, res, next) {
    comprof.findOne({id:req.user.id},function (err,prof) {
        if(prof){
            res.render('com/prof',{prof:prof});
        }
        else
            res.redirect('/com/prof');

    });

});
router.post('/editprof', function(req, res, next) {
    console.log(req.body);
    //console.log(req.user._id);
    comprof.findOne({com_id:req.user._id},function (err,prof) {
        if(err){
            console.log(err);
        }
        if(prof){


                companyName= req.body.companyName,
                phone=req.body.phone,
                email= req.body.email,
                website= req.body.website,
                address= req.body.address,
                dat= req.body.date
                ,
                city= req.body.city,
                country= req.body.country,

                profilePic= req.body.profilePic,

                desc= req.body.desc
        }
        else {
            prof = new comprof({
                com_id: req.user._id,
                companyName: req.body.companyName,
                phone:req.body.phone,
                email: req.body.email.String,
                website: req.body.website,
                address: req.body.address.string,
                dat: req.body.date
                ,
                city: req.body.city,
                country: req.body.country,

                profilePic: req.body.profilePic,

                desc: req.body.desc
            });
        }
        prof.save(function(err,prof){
            if(err){
                req.flash('error_msg', err.message);
                res.redirect('/com/home');
            }
            else{
                res.redirect('/com/home');
            }
        });


    });


});


router.get('/getjob', function(req, res, next) {
    Job.find({com_id:req.user.id},function (err,doc) {
        if(doc){
            res.render('com/alljobs',{items:doc});
        }
        else{
            res.redirect('/com/home');
        }

    });


});
router.get('/fullcv/:id',function (req,res,next) {
    var id = req.params.id;
    stdprof.findOne({std_id:id},function (err,prof) {
        if(prof){
            CV.findOne({stdid:id},function(err,doc){

                if(doc){
                    console.log(doc,prof);
                    res.render('com/viewcv',{doc:doc,prof:prof});

            }
        else {
                    req.flash('error_msg','Cv Not Found');
                    res.redirect('/com/home');
                }
        });
        }
        else{

            req.flash('error_msg','Student Profile Not Found');
            res.redirect('/com/home');}

});
});
router.get('/fulljob/:id', function(req, res, next) {
    var id = req.params.id;
    Job.findOne({_id:id},function (err,doc) {
        if(doc){
            stdprof.find({std_id:doc.app},function (err,itm) {
                console.log(itm);
                res.render('com/fulljob',{doc:doc,item:itm});
            })

        }
        else {
            req.flash('error_msg','Not Found');
            res.redirect('/com/home');
        }

    });


});
router.get('/postjob', function(req, res, next) {
    //res.redirect('/users/register')
    res.render('com/postjob');
});

router.post('/postjob', function(req, res, next) {
    console.log(req.body);
    var jobe =new Job({
        com_id: req.user._id,
        j_title: req.body.j_title,
        jobtype: req.body.jobtype,
        j_exp: req.body.j_exp,
        j_sal: req.body.j_sal,
        date:req.body.dtp_input2,
        tag:req.body.tag,

        editor:req.body.editor
    });
    jobe.save(function (err) {
        if(err)
            return
        else
            res.redirect('/com/home');
    });
   // res.redirect('/com/home');
});

module.exports = router;
