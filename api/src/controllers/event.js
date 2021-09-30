const { Events, Categories, Subcategories } = require('../db');
const { v4: uuidv4 } = require('uuid');

async function AddEvent(req, res, next){
    const id = uuidv4();
    let data = {...req.body, id};
    try{
        const createdEvent = await Events.create({
            
            name: data.name,
            artist: data.artist,
            place: data.place,
            price: data.price,
            availableTickets: data.availableTickets,
            date: data.date,
            time: data.time,


        })
        await createdEvent.setCategories(data.categories);
        return res.send("Evento Creado Satisfactoriamente");

    }catch(error){
        console.log(error)
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    AddEvent
}