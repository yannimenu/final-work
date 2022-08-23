'use strict';
require('dotenv').config();

const express = require('express');
const passport = require('passport');
const Facebook = require('passport-facebook');

const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET } =  process.env;


const router = express.Router()

passport.use(new Facebook.Strategy({
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: '/facebook/return'
},
(accessToken, refreshToken, profile, cb) => {
  return cb(null, profile);
}));


passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

router.get('/login', passport.authenticate('facebook'));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/');
});


module.exports = router;