import { application } from 'express';

const { getAllEvents } = require('../controllers/events.js');
const { Events, Categories } = require('../db')

export const Filter = async () => {

    try {
        const eventos = await getAllEvents();
        let {
            nombre,
            cat,
            subCat,
         } = req.query
         if(cat === 'Music'){

         }
         else if( cat === 'Teatro'){
             
         }


    } catch (error) {
        console.log(error)
    }
}

(Filter());