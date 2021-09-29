const { Categories, Subcategories } = require('../db.js');

//CARGA EN LA BASE DE DATOS LAS SUBACATEGORIAS

async function addSubcategories(req, res, next) {
        const { genre, categoryId } = req.body;
        try {
            let newSub = await Subcategories.create({
                genre
            })
            const category = await Categories.findOne({
                where: {
                    id : categoryId
                }
            }) 
            category.addSubcategories(newSub)
            res.json(newSub)
            
        } catch (error) {
            next(error)
        }
    
}

module.exports = {
    addSubcategories
}