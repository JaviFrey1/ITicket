const { Tickets, Users, Events } = require("../db.js");


async function getTickets(req, res, next){
    try {

        const dataBase = await Tickets.findAll();
        if(dataBase.length > 0) return res.send(dataBase);
        else{
            res.send([])
        }

    } catch (error) {
        next(error)
    }
}

async function updateTickets(req, res, next){
    let id = req.params.id;

    const { propietario } = req.body;

    try {
        await Tickets.update(
            {
                propietario            
            },
            {
              where: {
                id: id,
              },
            }
          );
        
          let ticketUpdated = await Tickets.findByPk(id);
          res.json(ticketUpdated)

    } catch (error) {
        next(error)
    }
}

async function postTickets(req, res, next){ // User.addTickets(ticket)  Events.addTickets(ticket)
    
    let { propietario, userId, eventId } = req.body;
    
    try {
        
        const createdTicket = await Tickets.create({       
            propietario: propietario
        });
       
        
        const user = await Users.findOne({
            where: {
                id: userId
            }
        });
        
        await user.addTickets(createdTicket);

        const event = await Events.findOne({
            where: {
                id: eventId
            }
        });
        
        await event.addTickets(createdTicket);

        res.send('ticket creado correctamente');

    } catch (error) {
        next(error)
    }

}



module.exports = {
  getTickets,
  updateTickets,
  postTickets,
};
