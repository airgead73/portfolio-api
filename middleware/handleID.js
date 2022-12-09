const { ObjectId } = require('mongodb');

const handleID = (req, res, next) => {

  const { id } = req.params;

  if(!ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({
        success: false,
        message: 'ID is not valid'
      });
  }

  next();

}

module.exports = handleID;