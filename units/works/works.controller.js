const dbo = require('../../config');
const { ObjectId } = require('mongodb');

exports.read = async(req, res, next) => {

  try {

    const dbConnect = dbo.getDB();
    const result = await dbConnect.collection('works').find(req.query).toArray();
    return res.status(200).json(result);

  } catch(err) {
    next(err)
  }

}

exports.detail = async(req, res, next) => {

  const { id } = req.params;
  const query = { _id: ObjectId(id) };

  try {

    const dbConnect = dbo.getDB();
    const result = await dbConnect.collection('works').find(query).toArray();

    if(!result.length) {
      return res.status(401).json({ success: true, message: 'ID cannot be found.'});
    }
    
    return res.status(200).json(result);

  } catch(err) {
    next(err)
  }

}