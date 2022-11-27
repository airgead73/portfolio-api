/**
 * external imports
 */
 const express = require('express');
 const path = require('path');
 const cookieParser = require('cookie-parser');
 /**
  * internal imports
 **/
const port = process.env.PORT || 7070;
 /**
 * app activation
 */
const app = express();
/**
 * middleware
 */
 app.use(express.static(path.join(__dirname, 'public')));
 app.use(express.json({ limit: '50mb' }));
 app.use(express.urlencoded({ limit: '50mb', extended: true }));
 app.use(cookieParser()); 
 /**
 * routes
 */
app.get('/api/works', async(req, res, next) => {

  try {

    res.status(200).send('API get works');

  } catch(err) {
    next(err);
  }

});

app.get('/api/photos', async(req, res, next) => {

  try {

    res.status(200).send('API get photos');

  } catch(err) {
    next(err);
  }

});

/**
 * error handling
 */
 app.use('*', function(req, res, next) {
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

  res.status(status).send(`ERROR: ${err.message}`);

});
/**
 * export app
 */

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});