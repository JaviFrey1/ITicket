const { Users } = require('../db.js');
const bcrypt = require('bcrypt');


async function ConfirmPass(req, res, next) {


    let {id} = req.params;
    let data = {...req.body}; 

    const passHash = await bcrypt.hash(data.newPass, 10) ;

    try {
       const passUpd =  await Users.update(
            {
             password: passHash
              
            },
            {
              where: {
                id: id,
              },
            }
          );
        
         
          res.send("Me actualice de PANITA")

    } catch (error) {
        next(error)
    }
  

}



module.exports = {
    ConfirmPass
}