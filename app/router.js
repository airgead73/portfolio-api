const { Router } = require('express');
const apiRouter = Router();
const { workRouter } = require('./units/works');
const { photoRouter } = require('./units/photos');
const { profileRouter } = require('./units/profile');

// middleware
const { checkMethod } = require('./middleware');

apiRouter.use(checkMethod);
apiRouter.use('/works', workRouter);
apiRouter.use('/photos', photoRouter);
apiRouter.use('/profile', profileRouter);

module.exports = apiRouter;