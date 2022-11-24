/**
 * external imports
 */
 const express = require('express');
 const { auth } = require('express-openid-connect');
 const path = require('path');
 const cookieParser = require('cookie-parser');
/**
 * internal imports
 */
 const { authConfig } = require('./config');
 const { testMsg } = require('./config/env');
/**
 * app activation
 */
const app = express();
app.use(auth(authConfig));
/**
 * middleware
 */
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(express.json({ limit: '50mb' }));
 app.use(express.urlencoded({ limit: '50mb', extended: true }));
 app.use(cookieParser()); 
/**
 * locals
 */
 app.use(function(req, res, next) {
  res.locals.isAuthenticated = req.oidc.isAuthenticated();
  next();
});
/**
 * routes
 */
app.get('/api', (req, res, next) => {

  res.status(200).send('API: click on other path.');

});

app.get('/api/works', (req, res, next) => {

  res.status(200).send('API: get works.');

});

app.get('/api/photos', (req, res, next) => {

  res.status(200).send('API: get photos.');

});

app.get('/api/profile', (req, res, next) => {

  res.status(200).send('API: get profile.');

});

app.get('/api/test', (req, res, next) => {

  res.status(200).send(testMsg);

});
/**
 * error handling
 */
 app.use(function(req, res, next) {
  const error = new Error('path not found.');
  next(error);
});

app.use(function(err, req, res, next) {
  let status;
  if(!err.status) {
    status = 500;
  } else {
    status = err.status;
  }

  res.send(`ERROR: ${err.message}`);

});
/**
 * export app
 */
module.exports = app;