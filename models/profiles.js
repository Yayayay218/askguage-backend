var mongoose = require('mongoose'), Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var profileSchema = new mongoose.Schema({
    services: {type: Schema.Types.ObjectId, ref:'Services'},
    businessName: String,
    website: String,
    businessEmail: String,
    businessPhone: String,
    businessAddress: String,
    brokerageName: String,
    brokeragePhone: String,
    brokerageAddress: String,
    banks: {type: Schema.Types.ObjectId, ref:'Banks'},
    lenders: [{type: Schema.Types.ObjectId, ref:'Lenders'}],
    yearOfExp: Number,
    licence: String,
    areMobile: String,
    languages: [{type: Schema.Types.ObjectId, ref:'Languages'}],
    time: String,
    optIn: String,
    socialMedia: String,
    jobTitle: String,
    employer: String,
    lengthOfEmp : Number,
    industry: String,
    sex: Number,
    dayOfBirth: Date,
    civilStatus: String,
    citizenship: String,
    address: String,
    user: {type: Schema.Types.ObjectId, ref:'Users'},
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
});

mongoose.model('Profiles', profileSchema);