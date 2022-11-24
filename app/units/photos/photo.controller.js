/**
 * @desc Read photos 
 * @route GET - /photos
 * @access Private
 * */

 exports.read = async(req,res,next) => {

  try {

    res.status(200).send('API read photos');

  } catch(err) {

    next(err);

  }

 }

 /**
 * @desc Read photo detail 
 * @route GET - /photos/:id
 * @access Private
 * */

  exports.detail = async(req,res,next) => {

    try {

      const { id } = req.params;
  
      res.status(200).send(`API photo detail: ${id}.`);
  
    } catch(err) {
  
      next(err);
  
    }
  
   }