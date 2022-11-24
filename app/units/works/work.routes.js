const { Router } = require('express');
const workRouter = Router();

// controllers
const { read, detail } = require('./work.controller');

workRouter.route('/').get(read);
workRouter.route('/:id').get(detail);

module.exports = workRouter;