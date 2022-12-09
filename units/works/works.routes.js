const { Router } = require('express');
const workRouter = Router();

// controllers
const { read, detail } = require('./works.controller');

// middleware
const { handleID } = require('../../middleware');

// routes
workRouter.route('/').get(read);
workRouter.route('/:id').get(handleID,detail);

module.exports = workRouter;