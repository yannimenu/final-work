'use strict';

require('dotenv').config();

const path = require('path');
const express = require('express');
const axios = require('axios').default;
const cookieParser = require('cookie-parser')

const passport = require('passport');

const { SESSION_SECRET, PORT} =  process.env;
const port = PORT || 3000;

const fb = require('./routes/facebook');
const linkedin = require('./routes/linkedin');
const google = require('./routes/google');


const app = express();


app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({ secret: SESSION_SECRET, resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());


app.get('/', async (req, res) => {
  let refreshed = 1

  if(req.cookies.refresh){
    refreshed = parseInt(req.cookies.refresh ) + 1
  }

  res.cookie('refresh', refreshed)
  
  const { user } = req;

  const ip = await axios.get('http://ip-api.com/json/')

  const { query, country, city } = ip.data

  res.render('home', { user, ip: query, countryData: country +  " " + city, refresh: req.cookies.refresh});
})

app.use('/facebook', fb);
app.use('/linkedin', linkedin)
app.use('/google', google)

app.get('/browser', (req, res) => {
  res.render('browser')
})

app.get('/cookies', (req, res) => {
  res.render('cookies')
})

app.get('/webcams', (req, res) => {
  res.render('webcams')
})

app.get('/socialmedia', (req, res) => {
  res.render('socialmedia')
})

app.get('/ipaddress', (req, res) => {
  res.render('ipaddress')
})

app.get('/taketest', (req, res) => {
  res.render('taketest')
})

app.get('/q1', (req, res) => {
  res.render('q1')
})

app.get('/q1no', (req, res) => {
  res.render('q1no')
})

app.get('/q1yes', (req, res) => {
  res.render('q1yes')
})

app.get('/q2', (req, res) => {
  res.render('q2')
})

app.get('/q2yes', (req, res) => {
  res.render('q2yes')
})

app.get('/q2no', (req, res) => {
  res.render('q2no')
})

app.get('/q2yes2', (req, res) => {
  res.render('q2yes2')
})



app.get('/q3', (req, res) => {
  res.render('q3')
})

app.get('/q3no', (req, res) => {
  res.render('q3no')
})

app.get('/q3yes', (req, res) => {
  res.render('q3yes')
})


app.get('/q4', (req, res) => {
  res.render('q4')
})

app.get('/q4no', (req, res) => {
  res.render('q4no')
})

app.get('/q4yes', (req, res) => {
  res.render('q4yes')
})

app.get('/q5', (req, res) => {
  res.render('q5')
})

app.get('/q5correct', (req, res) => {
  res.render('q5correct')
})

app.get('/q5unfort', (req, res) => {
  res.render('q5unfort')
})


app.listen(port, () => {
  console.log(`Express server is listing on PORT ${port}`)
});