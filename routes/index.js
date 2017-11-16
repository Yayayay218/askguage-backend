var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');

var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

var authCtrl = require('../controllers/auth');
var fileCtrl = require('../controllers/file');
var settingCtrl = require('../controllers/profileSettings');
var profileCtrl = require('../controllers/profiles')

var passport = require('passport');

//  Setting
router.post('/settings/services', settingCtrl.servicePost);
router.get('/settings/services', settingCtrl.serviceGET);
router.post('/settings/banks', settingCtrl.bankPost);
router.get('/settings/banks', settingCtrl.bankGET);
router.post('/settings/lenders', settingCtrl.lenderPost);
router.get('/settings/lenders', settingCtrl.lenderGET);
router.post('/settings/languages', settingCtrl.languagePost);
router.get('/settings/languages', settingCtrl.languageGET);
router.post('/settings', settingCtrl.settingPOST)
router.get('/settings', settingCtrl.settingGET)

//  Profile
router.post('/profiles', auth, profileCtrl.profilePOST);
//  File
router.post('/files', fileCtrl.uploadFile);


//  Auth
router.post('/auth/register', authCtrl.register);
router.post('/auth/login', authCtrl.login);

router.post('/auth/facebook',
    passport.authenticate('facebook-token'),
    authCtrl.loginSocial
);
router.post('/auth/twitter',
    passport.authenticate('twitter-token'),
    authCtrl.loginSocial
);
//  User
router.get('/me', auth, authCtrl.userGETInfo);
router.put('/me', auth, authCtrl.userPUT);
router.get('/users', authCtrl.userGET);

//  Crawler

module.exports = router;
