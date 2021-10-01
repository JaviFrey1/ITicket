import e, { application } from 'express';

const { getAllEvents } = require('../controllers/events.js');
const { Events, Categories } = require('../db')

export const Filter = async (req,res,next) => { //Esto lo hizo Javi

    try {
        const eventos = await getAllEvents();
        let subCats = [];
        let { cat, subCat } = req.query;
        if (cat === 'Music') {
            if (subCat === 'Blues') { 
                subCats = subCats.filter(el => console.log(e)) 
            }
            if (subCat === 'Cumbia') { 

            }
            if (subCat === 'Electronica') { }
            if (subCat === 'Folklore') { }
            if (subCat === 'Hip hop') { }
            if (subCat === 'Jazz') { }
            if (subCat === 'Rock') { }
            if (subCat === 'Pop') { }
            if (subCat === 'Trap') { }
            if (subCat === 'Reggaeton') { }
            if (subCat === 'Reggae') { }
            if (subCat === 'Tango') { }
        }
        else if (cat === 'Teatro') {
            if (subCat === 'Drama') { }
            if (subCat === 'Comedia') { }
            if (subCat === 'Absurdo') { }
            if (subCat === 'Circo') { }
            if (subCat === 'Stand Up') { }
            if (subCat === 'Unipersonal') { }
            if (subCat === 'Opera') { }
        }

        return res.send({
            count: subCats.length
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}

(Filter());