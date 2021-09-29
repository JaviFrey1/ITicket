const { Categories } = require('../db.js')

//CARGA DE CATEGORIES MUSICA Y TEATRO A LA BASE DE DATOS

async function addCategories(req, res , next) {
    let { name } = req.body;
    try {
        const created = await Categories.create({
            name
        })
        res.send('creado re piola')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addCategories
}