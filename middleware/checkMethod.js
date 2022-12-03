const checkMethod = async(req, res, next) => {
  console.log('method:', req.method);
  next();
}

module.exports = checkMethod;