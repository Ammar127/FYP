const mongoose = require('mongoose');

// User Schema
const CVSchema = mongoose.Schema({

    stdid:{type:String},
 objective: {type:String},
    education:
    [
        { degree: {type:String},
        inst: {type:String},
        session: {type:String},
        marks: {type:String} },
        { degree: {type:String},
            inst: {type:String},
            session: {type:String},
            marks: {type:String} },
        { degree: {type:String},
            inst: {type:String},
            session: {type:String},
            marks: {type:String} }
    ],
        projects:
    [
        { title: {type:String},
        tech: {type:String},
        desc: {type:String} }
        ],
        experience:
    [ { company: {type:String},
        designation: {type:String},
        startDate: {type:String},
        endDate: {type:String}} ],
        skills: [ { name: {type:String}, rate: {type:String} } ],
    achievements: [  {type:String} ],
    certifications: [ {type:String} ],
    areaOfInterests: [ {type:String} ]


});

const CV = module.exports = mongoose.model('CV', CVSchema);
