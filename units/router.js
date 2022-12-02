const { Router } = require('express');
const router = Router();
const dbo = require('../config');

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