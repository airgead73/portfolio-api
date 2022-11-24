const { Router } = require('express');
const photoRouter = Router();

// controllers
const { read, detail } = require('./photo.controller');

photoRouter.route('/').get(read);
photoRouter.route('/:id').get(detail);

module.exports = photoRouter;