const mongoose = require('mongoose');

// Student Profile Schema
const comProfSchema = mongoose.Schema({
 com_id: {
     type:String,
     required:true
    },
    companyName: {
        type:String,
        required:true
    },
    dat: {
        type:String

    },
    phone: {
        type:String,
            required:true
    },
    email: {
        type:String

    },
    website: {
        type:String,
        required:true
    },
    address: {
        type:String

    },
    city: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    },
    profilePic: {
        type:String

    },
    desc:{
        type:String,
        required:true
    }
});

const comProf = module.exports = mongoose.model('CompanyProf', comProfSchema);
