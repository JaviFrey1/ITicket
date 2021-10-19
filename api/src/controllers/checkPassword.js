const { Users } = require('../db');
const bcrypt = require('bcrypt');


async function checkPassword(req, res, next) {

    let id = req.params.id;

    let password = req.body.password;

    try{

      const user = await Users.findOne({
        where: {
          id: id
        }

      })
      
      if(await bcrypt.compare(password, user.password)){
        return res.send('Las contraseñas coinciden')
      } else {
        res.send('Las contraseñas no coinciden')
      }
      
    } catch (error) {
        next(error)
    }
  

}


module.exports = {
  checkPassword
}