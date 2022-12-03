const dbo = require('../../config');

exports.read = async(req, res, next) => {

  try {

    const dbConnect = dbo.getDB();
    const result = await dbConnect.collection('works').find({}).toArray();
    return res.status(200).json(result);

  } catch(err) {
    next(err)
  }

}