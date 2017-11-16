var mongoose = require('mongoose'), Schema = mongoose.Schema;

var lenderSchema = new mongoose.Schema({
    name: String
})

mongoose.model('Lenders', lenderSchema);