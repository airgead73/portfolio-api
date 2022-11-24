const { Router } = require('express');
const profileRouter = Router();

// controllers
const { read } = require('./profile.controller');

profileRouter.route('/').get(read);

module.exports = profileRouter;