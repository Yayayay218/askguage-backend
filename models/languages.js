var mongoose = require('mongoose'), Schema = mongoose.Schema;

var languageSchema = new mongoose.Schema({
    name: String
})

mongoose.model('Languages', languageSchema);