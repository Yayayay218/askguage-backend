var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var HTTPStatus = require('../helpers/lib/http_status');
var constant = require('../helpers/lib/constant');


var Services = mongoose.model('Services');
var Banks = mongoose.model('Banks');
var Lenders = mongoose.model('Lenders');
var Languages = mongoose.model('Languages');
var Settings = mongoose.model('Settings');

var sendJSONResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

//  Services
module.exports.servicePost = function (req, res) {
    var data = req.body;
    var service = new Services(data)

    service.save(function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.CREATED, {
            message: 'OK',
            data: data
        })
    })
}

module.exports.serviceGET = function (req, res) {
    var query = req.query || {};
    const id = req.query.id;
    delete req.query.id;
    if (id)
        query = {
            "_id": {$in: id}
        };
    else
        query = {};
    Services.find(query, function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.OK, {
            message: 'OK',
            data: data
        })
    })
};

//  Bank
module.exports.bankPost = function (req, res) {
    var data = req.body;
    var bank = new Banks(data)

    bank.save(function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.CREATED, {
            message: 'OK',
            data: data
        })
    })
}

module.exports.bankGET = function (req, res) {
    var query = req.query || {};
    const id = req.query.id;
    delete req.query.id;
    if (id)
        query = {
            "_id": {$in: id}
        };
    else
        query = {};
    Banks.find(query, function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.OK, {
            message: 'OK',
            data: data
        })
    })
};

//  Lenders
module.exports.lenderPost = function (req, res) {
    var data = req.body;
    var lender = new Lenders(data)

    lender.save(function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.CREATED, {
            message: 'OK',
            data: data
        })
    })
}

module.exports.lenderGET = function (req, res) {
    var query = req.query || {};
    const id = req.query.id;
    delete req.query.id;
    if (id)
        query = {
            "_id": {$in: id}
        };
    else
        query = {};
    Lenders.find(query, function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.OK, {
            message: 'OK',
            data: data
        })
    })
};


//  Language
module.exports.languagePost = function (req, res) {
    var data = req.body;
    var language = new Languages(data)

    language.save(function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.CREATED, {
            message: 'OK',
            data: data
        })
    })
}

module.exports.languageGET = function (req, res) {
    var query = req.query || {};
    const id = req.query.id;
    delete req.query.id;
    if (id)
        query = {
            "_id": {$in: id}
        };
    else
        query = {};
    Languages.find(query, function (err, data) {
        if (err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                message: err
            })
        sendJSONResponse(res, HTTPStatus.OK, {
            message: 'OK',
            data: data
        })
    })
};

module.exports.settingPOST = function (req, res) {
    var data = req.body;
    var setting = new Settings(data)

    setting.save(function (err, setting) {
        if(err)
            return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                success: false,
                message: err
            })
        sendJSONResponse(res, HTTPStatus.CREATED, {
            success: true,
            message: 'Create Setting Successful',
            data: setting
        })
    })
}

module.exports.settingGET = function (req, res) {
    Settings.find({})
        .populate('services')
        .populate('banks')
        .populate('lenders')
        .populate('languages')
        .exec(function (err, setting) {
            if(err)
                return sendJSONResponse(res, HTTPStatus.BAD_REQUEST, {
                    success: false,
                    message: err
                })
            sendJSONResponse(res, HTTPStatus.OK, {
                success: true,
                message: 'Find Settings Successful',
                data: setting
            })
        })
}