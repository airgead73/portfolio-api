const { Router } = require('express');
const workRouter = Router();

// controllers
const { read } = require('./works.controller');

// routes
workRouter.route('/').get(read);

module.exports = workRouter;