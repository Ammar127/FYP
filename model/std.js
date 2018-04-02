const mongoose = require('mongoose');

// Student Profile Schema
const stdProfSchema = mongoose.Schema({

    std_id:{
        type:String,
        required:true
    },
    Name:{
        type: String,
        required: true
    },

    Title:{
        type: String,
        required: true
    },
    cnic:{
        type: String,
        required: true
    },
    DOB:{
        type: Date,
        default: Date.now
    },
    roll: {
        type: String,
        required:true
    }
,
    email: {
        type: String,
        required:true
    },
    Phone: {
        type: String,
        required:true
    },

    address: {
        type: String,
        required:true
    },

    about: {
        type: String,
        required:true
    }
});

const stdProf = module.exports = mongoose.model('StudentProf', stdProfSchema);
