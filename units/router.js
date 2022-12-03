const { Router } = require('express');
const router = Router();
const { workRouter } = require('./works');
const { photoRouter } = require('./photos');

router.use('/works', workRouter);
router.use('/photos', photoRouter);

module.exports = router;