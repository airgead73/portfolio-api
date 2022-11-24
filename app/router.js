const { Router } = require('express');
const apiRouter = Router();
const { workRouter } = require('./units/works');

apiRouter.use('/works', workRouter);

module.exports = apiRouter;
