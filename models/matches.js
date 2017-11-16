var mongoose = require('mongoose'), Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var matchSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    type: Number,
    coverPhoto: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
});

matchSchema.plugin(mongoosePaginate);
mongoose.model('Matches', matchSchema);