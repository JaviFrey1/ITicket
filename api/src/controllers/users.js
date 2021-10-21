const { Users } = require('../db.js');
const bcrypt = require('bcrypt');



async function getUsers(req, res, next){
    try {

        const dataBase = await Users.findAll();
        if(dataBase.length > 0) return res.send(dataBase);
        else{
            res.send([])
        }

    } catch (error) {
        next(error)
    }
}

async function getUserById(req, res, next){

    let { id } = req.params;

    try {
        const dataBase = await Users.findOne({
            where:{
                id:id
            }
        })

        if(dataBase){
            res.json(dataBase);
        } else{
            return res.json("No existe un Usuario con esa Id")
        }
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next){

let id = req.params.id

try {
    let deleted = await Users.destroy({
        where:{ id: id}
    })
    return res.send('borrado');
} catch (error) {
    next(error)
}

}

async function updateUser(req, res, next){

    let id = req.params.id;
    console.log("SOY ID", id)
    let data = {...req.body}; 
    console.log("SOY DATA",data)
    const passHash = await bcrypt.hash(data.password, 10) ;

    try {
        await Users.update(
            {
             password: passHash
              
            },
            {
              where: {
                id: id,
              },
            }
          );
        
          let userUpdated = await Users.findByPk(id);
          res.json(userUpdated)

    } catch (error) {
        next(error)
    }

}

module.exports = {
    getUsers,
    getUserById,
    deleteUser,
    updateUser
}