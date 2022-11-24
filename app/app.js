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
/**
 * app activation
 */
const { authConfig } = require('./config');
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
app.get('/', (req, res, next) => {

  const { isAuthenticated } = res.locals;

  console.log(isAuthenticated);

  if(!isAuthenticated) {
    return res.status(401).redirect('/login');
  }

  next();


});

app.get('/test', (req, res, next) => {

  const test = process.env.TEST_MSG;
  res.status(200).send(test);

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