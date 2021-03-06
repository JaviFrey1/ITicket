const { Categories, SubCategories } = require('../db');

//CARGA EN LA BASE DE DATOS LAS SUBACATEGORIAS

const subCategories = [{ genre: 'Blues', catId:1 }, { genre: 'Cumbia', catId:1}, { genre: 'Electronica', catId:1}, { genre: 'Folklore', catId:1 }, { genre: 'Hip hop', catId:1}, { genre: 'Reggaeton' , catId:1}, { genre: 'Rock', catId:1}, { genre: 'Pop', catId:1}, { genre: 'Trap', catId:1 }, { genre: 'Jazz' , catId:1}, { genre: 'Reggae', catId:1}, { genre: 'Tango', catId:1 }, { genre: 'Drama', catId:2 }, { genre: 'Comedia', catId:2}, { genre: 'Absurdo' , catId:2}, { genre: 'Circo', catId:2}, { genre: 'Stand Up', catId:2 }, { genre: 'Unipersonal' , catId:2},{ genre: 'Opera' , catId:2},{ genre: 'Deporte', catId:3},{ genre: 'TED', catId:3}]

async function getSubCategories(req, res, next) {

    try {
        const subCatBD = await SubCategories.findAll()
        if (subCatBD.length > 0) return res.send(subCatBD)
        else {
            const subCatCreated = await SubCategories.bulkCreate(subCategories)
          
            subCatCreated.map(async subCat => {
                const category = await Categories.findOne({
                    where: {
                        id: subCat.catId
                    }
                })
                await category.addSubCategories(subCat)

            })
            res.send(subCatCreated)
        }

    } catch (error) {
        next(error)
    }
}


async function deleteSubCategories(req, res, next){
    let id = req.params.id
  
    try {
      
      let deleted = await SubCategories.destroy({
        where:{
          catId: id
        }
      })
  
      return res.send('borrado')
  
  
    } catch (error) {
      next(error)
    }
  
  }

async function addSubCategories(req, res, next){
    
}


module.exports = {
    getSubCategories
}