var mongoose = require('mongoose'), Schema = mongoose.Schema;

var serviceSchema = new mongoose.Schema({
    name: String
})

mongoose.model('Services', serviceSchema);