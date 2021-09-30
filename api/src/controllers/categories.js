const { Categories } = require('../db.js');

//CARGA EN LA BASE DE DATOS LAS SUBACATEGORIAS

const categories = [{ name: 'Musica', id: 1 }, { name: 'Teatro', id: 2 }]

async function getCategories(req, res, next) {

    try {
        const catBD = await Categories.findAll()
        if (catBD.length > 0) return res.send(catBD)
        else {
            const catCreated = await Categories.bulkCreate(categories)
            res.send(catCreated)
        }

    } catch (error) {
        next(error)
    }

}

module.exports = {
    getCategories
}