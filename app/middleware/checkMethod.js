const checkMethod = (req, res, next) => {

  const validMethod = req.method === 'GET';

  if(req.method !== 'GET') {

    const error = new Error('Invalid request method.');
    error.status = 400;

    return next(error);

  }

  next();

}

module.exports = checkMethod;