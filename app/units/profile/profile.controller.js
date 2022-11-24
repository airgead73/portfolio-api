/**
 * @desc Read profile
 * @route GET - /profile
 * @access Private
 * */

 exports.read = async(req,res,next) => {

  try {

    res.status(200).send('API read profile');

  } catch(err) {

    next(err);

  }

 } 