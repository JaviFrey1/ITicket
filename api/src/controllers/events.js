const {Events, Categories, Subcategories} = require("../db");

async function getAllEvents(req, res){
    let name = req.query.name;
    if(name){
        try {
            var lower = name.toLowerCase();
            const dataBase = await Events.findOne({
                where:{
                    name:lower
                },
                include: [Categories]
            });

            if(dataBase){
                let cat = dataBase.categories.map((el)=> el.name)
                var eventDb ={
                    name:dataBase.name,
                    id: dataBase.id,
                    categories: cat,
                    artist: dataBase.artist,
                    place: dataBase.place,
                    price: dataBase.price,
                    availableTickets: dataBase.availableTickets,
                    date: dataBase.date,
                    time:dataBase.time,

                }
                return res.json(eventDb);
            }

            else{
                return res.status(400).send("Evento no Encontrado");
            }
        } catch (error) {
            return res.status(400).send({error:"Evento Inexistente"})
        }
    }
    else{
        try {
            var dataBase = await Events.findAll({
                include:[Categories]
            });
    
            const eventDb = dataBase.map(result =>{
                let cat = result.categories.map(el => el.name);
                return{
                    name: result.name,
                    id: result.id,
                    categories: cat,
                    artist: result.artist,
                    place: result.place,
                    price: result.price,
                    availableTickets: result.availableTickets,
                    date: result.date,
                    time:result.time
                }

                
            })
            console.log(eventDb)
            res.json(eventDb)
           
        } catch (error) {
            return res.status(400).send({error:"Evento No existe"})
        }
       
    }
}

async function getEventsId(req, res){
let id = req.params.id;
if(id){
    try {
        if(id.includes('-')){
            const dataBase = await Events.findOne({
                where:{
                    id:id,
                },
                include: [Categories]
            })

            let cat = dataBase.categories.map((el)=> el.name);
            var finalEvent = {
                name: dataBase.name,
                id:dataBase.id,
                categories: cat,
                artist: dataBase.artist,
                place: dataBase.place,
                price: dataBase.price,
                availableTickets: dataBase.availableTickets,
                date: dataBase.date,
                time:dataBase.time

            }
            res.json(finalEvent);
        }

        else{
            return res.status(400).send("No hay eventos");
        }
    } catch (error) {
        return res.status(400).send({error:"Id no existe"});
    }
}
else{
    return res.status(400).send("No hay eventos con ese Id");
}
}

module.exports = {
    getAllEvents,
    getEventsId
}