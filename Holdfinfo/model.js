const mongoose = require('mongoose')
const data = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    details : {
        type : Object,
        required  : true
    }
});
const models = mongoose.model('Entries',data);
module.exports = models;