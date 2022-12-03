const { Router } = require('express');
const router = Router();
const { workRouter } = require('./works');
const { photoRouter } = require('./photos');
const dbo = require('../config');

//router.use('/works', workRouter);
//router.use('/photos', photoRouter);
router.get('/works', async(req, res, next) => {

  try {

    const dbConnect = dbo.getDB();
    const result = await dbConnect.collection('works').find({}).toArray();
    return res.status(200).json(result);

  } catch(err) {
    next(err)
  } 

});

router.get('/photos', async(req, res, next) => {

  try {

    res.status(200).send('API get photos');

  } catch(err) {
    next(err);
  }

});

module.exports = router;