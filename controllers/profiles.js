var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var HTTPStatus = require('../helpers/lib/http_status');
var constant = require('../helpers/lib/constant');


var Profiles = mongoose.model('Profiles');

var sendJSONResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//  Config upload photo
var multer = require('multer');

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, 'uploads/Matches')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});
var upload = multer({
    storage: storage
}).single('file');

module.exports.profilePOST = function (req, res) {
    req.body.user = req.payload._id;
    var data = req.body;

    var profile = Profiles(data);
    profile.save(function (err, data) {
        if(err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.CREATED, {
            message: 'OK',
            data: data
        })
    })
};
