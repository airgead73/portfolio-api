/**
 * @desc Read works 
 * @route GET - /works
 * @access Private
 * */

 exports.read = async(req,res,next) => {

  try {

    res.status(200).send('API read works');

  } catch(err) {

    next(err);

  }

 }

 /**
 * @desc Read work detail 
 * @route GET - /works/:id
 * @access Private
 * */

  exports.detail = async(req,res,next) => {

    try {

      const { id } = req.params;
  
      res.status(200).send(`API work detail: ${id}.`);
  
    } catch(err) {
  
      next(err);
  
    }
  
   }