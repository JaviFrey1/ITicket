const { Categories, Subcategories } = require('../db.js');

//CARGA EN LA BASE DE DATOS LAS SUBACATEGORIAS

const subCategories = [{ genre: 'Blues', categoryId: 1 }, { genre: 'Cumbia', categoryId: 1 }, { genre: 'Electronica', categoryId: 1 }, { genre: 'Folklore', categoryId: 1 }, { genre: 'Hip hop', categoryId: 1 }, { genre: 'Jazz', categoryId: 1 }, { genre: 'Rock', categoryId: 1 }, { genre: 'Pop', categoryId: 1 }, { genre: 'Trap', categoryId: 1 }, { genre: 'Reggaeton', categoryId: 1 }, { genre: 'Reggae', categoryId: 1 }, { genre: 'Tango', categoryId: 1 }, { genre: 'Drama', categoryId: 2 }, { genre: 'Comedia', categoryId: 2 }, { genre: 'Absurdo', categoryId: 2 }, { genre: 'Circo', categoryId: 2 }, { genre: 'Stand Up', categoryId: 2 }, { genre: 'Unipersonal', categoryId: 2 },{ genre: 'Opera', categoryId: 2 }]

async function getSubCategories(req, res, next) {

    try {
        const subCatBD = await Subcategories.findAll()
        if (subCatBD.length > 0) return res.send(subCatBD)
        else {
            const subCatCreated = await Subcategories.bulkCreate(subCategories)
            subCatCreated.map(async subCat => {
                const category = await Categories.findOne({
                    where: {
                        id: subCat.categoryId
                    }
                })
                category.addSubcategories(subCat)

            })
            res.send(subCatCreated)
        }


    } catch (error) {
        next(error)
    }

}

module.exports = {
    getSubCategories
}