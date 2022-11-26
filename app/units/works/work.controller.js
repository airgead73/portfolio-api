const fetch = require('node-fetch');
/**
 * @desc Read works 
 * @route GET - /works
 * @access Private
 * */

 exports.read = async(req,res,next) => {

  try {

    const response = await fetch('localhost://8080/api/works');
    const data = await response.json();

    return res.status(200)
      .json({
        success: true,
        message: 'API get works',
        data
      })

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