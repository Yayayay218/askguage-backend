var mongoose = require('mongoose'), Schema = mongoose.Schema;

var bankSchema = new mongoose.Schema({
    name: String
})

mongoose.model('Banks', bankSchema);