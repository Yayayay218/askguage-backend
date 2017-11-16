var mongoose = require('mongoose'), Schema = mongoose.Schema;
var crypto = require('crypto')
var jwt = require('jsonwebtoken');
var validate 	= require('mongoose-validator');

var mongoosePaginate = require('mongoose-paginate');
var emailValidate = [
    validate({
        validator: 'isEmail',
        message: 'invalid email!'
    })
]

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
});

var userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        validate: emailValidate
    },
    firstName: String,
    lastName: String,
    avatar: String,
    phoneNumber: String,
    profiles: profileSchema,
    role: {
        type: Number,
        default: 0
    },
    facebook: {
        id: {
            type: String,
            required: false
        },
        token: {
            type: String,
            required: false
        }
    },
    twitter: {
        id: {
            type: String,
            required: false
        },
        token: {
            type: String,
            required: false
        }
    },
    token: {
        type: String,
        required: false
    },
    hash: String,
    salt: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: Date
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
};

userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            avatar: this.avatar,
            phoneNumber: this.phoneNumber,
            role: this.role,
            exp: parseInt(expiry.getTime() / 1000)
        }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

userSchema.methods.isAdmin = function () {
    return this.role == 2
}

userSchema.methods.isCustomer = function () {
    return this.role == 0
}

userSchema.methods.isProvider = function () {
    return this.role == 1
}
userSchema.plugin(mongoosePaginate);
mongoose.model('Users', userSchema);