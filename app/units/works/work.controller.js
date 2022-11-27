const dbo = require('../../database/conn');

/**
 * @desc Read works 
 * @route GET - /works
 * @access Private
 * */

 exports.read = async(req,res,next) => {
 

  try {

    const results = await db.READ('works');

    return res.status(200).json(results);

    // dbConnect
    //   .collection('works')
    //   .find({})
    //   .limit(50)
    //   .toArray(function(err, result) {
    //     if(err) {
    //       console.log(err);
    //     } else {
    //       return res.status(200).json(result);
    //     }
    //   })


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