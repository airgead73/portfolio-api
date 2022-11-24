const { Router } = require('express');
const apiRouter = Router();
const { workRouter } = require('./units/works');
const { photoRouter } = require('./units/photos');

apiRouter.use('/works', workRouter);
apiRouter.use('/photos', photoRouter);

module.exports = apiRouter;
