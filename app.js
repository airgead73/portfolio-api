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
const dbo = require('./db');
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

  const dbConnect = dbo.getDb();

  dbConnect
    .collection('works')
    .find({})
    .toArray(function (err, result) {
      if(err) {
        return res.status(400).send('Error fetching works');
      } else {
        return res.status(200).json(result);
      }
    })

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
 * app listen
 */
dbo.connectToServer(function(err) {
  if(err) {
    console.error(err);
    process.exit();
  }
})
app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});