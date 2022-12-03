const { Router } = require('express');
const photoRouter = Router();

// controllers
const { read } = require('./photos.controller');

photoRouter.route('/').get(read);

module.exports = photoRouter;