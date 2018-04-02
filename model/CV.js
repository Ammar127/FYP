const mongoose = require('mongoose');

// User Schema
const CVSchema = mongoose.Schema({

    objective: { type: String},
    education: [{type:Object}],//'[object Object],[object Object],[object Object]',
    projects:  [{type:Object}],//'[object Object]',
    experience:  [{type:Object}],//'[object Object]',
    skills:  [{type:Object}],//'[object Object],[object Object]',
    acheivements:  [{type:String}],//'12',
    certifications:  [{type:String}],
    area:  [{type:String}]


});

const CV = module.exports = mongoose.model('CV', CVSchema);
