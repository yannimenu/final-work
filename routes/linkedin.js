'use strict';
require('dotenv').config();

const express = require('express')
const passport = require('passport');
const Linkedin = require('passport-linkedin-oauth2');

const { lINKEDIN_CLENT_ID, lINKEDIN_CLENT_SECRET } =  process.env;

const router = express.Router()

passport.use(new Linkedin.Strategy({
  clientID: lINKEDIN_CLENT_ID,
  clientSecret: lINKEDIN_CLENT_SECRET,
  callbackURL: 'http://www.localhost:3000/linkedin/return',
  scope: ['r_emailaddress', 'r_liteprofile'],
  state: true
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

router.get('/login', passport.authenticate('linkedin'));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/return', 
  passport.authenticate('linkedin', { failureRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/');
});

// router.get('/return', () => {
//     console.log('yes in retrn')
// })

module.exports = router