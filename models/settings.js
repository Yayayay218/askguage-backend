var mongoose = require('mongoose'), Schema = mongoose.Schema;

var settingSchema = new mongoose.Schema({
    services: [{type: Schema.Types.ObjectId, ref:'Services'}],
    banks : [{type: Schema.Types.ObjectId, ref:'Banks'}],
    languages: [{type: Schema.Types.ObjectId, ref:'Languages'}],
    lenders: [{type: Schema.Types.ObjectId, ref:'Lenders'}]
})

mongoose.model('Settings', settingSchema);