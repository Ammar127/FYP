
const mongoose = require('mongoose');

// User Schema
const jobSchema = mongoose.Schema({
    com_id: {
        type:String,
        required:true
    },
     j_title: {
         type: String,
         required: true
     },
    jobtype: {
        type: String,
        required: true
    },
    j_exp: {
        type: String,
        required: true
    },
    j_sal: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    dateposted: {
        type: Date,
        default: Date.now
    },
    tag:{
        type: String,
        required: true
    },

    editor:{
        type: String,
        required: true
    },
    app:[{type:String}]
});

const Job = module.exports = mongoose.model('Job', jobSchema);
