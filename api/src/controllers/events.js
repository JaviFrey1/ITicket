const { Events, Categories, SubCategories } = require("../db");
const { Op } = require('sequelize');

async function getAllEvents(req, res) {
    let name = req.query.name;
    if (name) {
        
        const searcheado = name.toLowerCase()
        try {
            
            const dataBase = await Events.findAll({

                include:[
                    {
                        model: Categories,
                        through: {
                            attributes: [],
                        },
                    },
                        
                     {
                        model: SubCategories,
                        through: {
                            attributes: [],
                        },
                    },
                ] 
            });
           if(dataBase.length > 0){
               const eventDb = dataBase.map(result => {
                   return {
                       name: result.name,
                       id: result.id,
                       category: result.categories.map(cat => cat.name),
                       subCategories: result.subCategories.map(subCat => subCat.genre),
                       artist: result.artist,
                       place: result.place,
                       address: result.address,
                       image:result.image,
                       price: result.price,
                       availableTickets: result.availableTickets,
                       date: result.date,
                       time: result.time
                   }
               })
   
           const filtered = eventDb.filter(event=>event.artist.toLowerCase().includes(searcheado) || event.name.toLowerCase().includes(searcheado))
           
           return res.json(filtered);
            }
            else return res.send("Evento Inexistente")

        } catch (error) {
            return res.status(400).send({ error: "Ocurrió un error durante la busqueda" })
        }
    }
    else {
        try {
            
            const dataBase = await Events.findAll({

                include:[
                    {
                        model: Categories,
                        through: {
                            attributes: [],
                        },
                    },
                        
                    {
                        model: SubCategories,
                        through: {
                            attributes: [],
                        },
                    },
                ] 
            });
           if(dataBase.length > 0){
               const eventDb = dataBase.map(result => {
                   return {
                       name: result.name,
                       id: result.id,
                       category: result.categories.map(cat => cat.name),
                       subCategories: result.subCategories.map(subCat => subCat.genre),
                       artist: result.artist,
                       place: result.place,
                       address: result.address,
                       image:result.image,
                       price: result.price,
                       availableTickets: result.availableTickets,
                       date: result.date,
                       time: result.time
                    }
               })
               
               res.json(eventDb)

            }else return res.send([])

        } catch (error) {
            return res.status(400).send({ error: "Ocurrió un error durante la busqueda" })
        }

    }
}

async function getEventById(req, res) {
    let { id } = req.params;

    try {
        const dataBase = await Events.findOne({
            where: {
                id: id,
            },
            include:[
                {
                    model: Categories,
                    through: {
                        attributes: [],
                    },
                },
                    
                {
                    model: SubCategories,
                    through: {
                        attributes: [],
                    },
                },
            ] 
        })

       if (dataBase){

           var finalEvent = {
   
               name: dataBase.name,
               id: dataBase.id,
               category: dataBase.categories.map(cat => cat.name),
               subCategories: dataBase.subCategories.map(subCat => subCat.genre),
               artist: dataBase.artist,
               place: dataBase.place,
               address: dataBase.address,
               image:dataBase.image,
               price: dataBase.price,
               availableTickets: dataBase.availableTickets,
               date: dataBase.date,
               time: dataBase.time
               
               
           }
           res.json(finalEvent);
        }else return res.json('No encontramos ese evento')
    }catch (error) {
        return res.status(400).send({ error: "Id no existe" });
    }

}

// async function getAllEvents(req, res) {
//     let name = req.query.name;
//     if (name) {
//         const firstLetter = name.charAt(0).toUpperCase();
//         const restWord = name.slice(1).toLowerCase();
//         const searcheado = firstLetter + restWord;
//         try {

//             const dataBase = await Events.findAll({
//                 where: {
//                     name: { [Op.like]: `%${searcheado}%` } 
//                 },

//                 include:[
//                     {
//                         model: Categories,
//                         through: {
//                             attributes: [],
//                         },
//                     },
                        
//                      {
//                         model: SubCategories,
//                         through: {
//                             attributes: [],
//                         },
//                     },
//                 ] 
//             });

//             if (dataBase.length > 0) {
//                 const eventsDb = dataBase.map(result => {
//                     return {
//                         name: result.name,
//                         id: result.id,
//                         category: result.categories.map(cat => cat.name),
//                         subCategories: result.subCategories.map(subCat => subCat.genre),
//                         artist: result.artist,
//                         place: result.place,
//                         address: result.address,
//                         image:result.image,
//                         price: result.price,
//                         availableTickets: result.availableTickets,
//                         date: result.date,
//                         time: result.time
//                     }
//                 })

//                 return res.json(eventsDb);
//             }
//             else return res.send("Evento Inexistente")

//         } catch (error) {
//             return res.status(400).send({ error: "Ocurrió un error durante la busqueda" })
//         }
//     }
//     else {
//         try {

//             const dataBase = await Events.findAll({

//                 include:[
//                     {
//                         model: Categories,
//                         through: {
//                             attributes: [],
//                         },
//                     },
                        
//                      {
//                         model: SubCategories,
//                         through: {
//                             attributes: [],
//                         },
//                     },
//                 ] 
//             });
//            if(dataBase.length > 0){
//                const eventDb = dataBase.map(result => {
//                    return {
//                        name: result.name,
//                        id: result.id,
//                        category: result.categories.map(cat => cat.name),
//                        subCategories: result.subCategories.map(subCat => subCat.genre),
//                        artist: result.artist,
//                        place: result.place,
//                        address: result.address,
//                        image:result.image,
//                        price: result.price,
//                        availableTickets: result.availableTickets,
//                        date: result.date,
//                        time: result.time
//                    }
//                })
   
//                res.json(eventDb)

//            }else return res.send([])

//         } catch (error) {
//             return res.status(400).send({ error: "Ocurrió un error durante la busqueda" })
//         }

//     }
// }

module.exports = {
    getAllEvents,
    getEventById
}