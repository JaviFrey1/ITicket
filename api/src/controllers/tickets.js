const { Tickets, Users, Events } = require("../db");
const { v4: uuidv4 } = require("uuid");


async function getTickets(req, res, next) {

    let { idUser } = req.query

    try {
       
        const dataBase = await Tickets.findAll({
            where: {
                userId: idUser
            },
            include: [
                {
                    model: Events
                },
                {
                    model: Users
                }
            ]
        });
        if (dataBase.length > 0) return res.send(dataBase);
        else {
            res.send([])
        }

    } catch (error) {
        next(error)
    }
}

async function updateTicket(req, res, next) {
    let id = req.params.id;

    const {propietario}  = req.query;
    
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

async function postTickets(req, res, next) { // User.addTickets(ticket)  Events.addTickets(ticket)

    let { cantidad, userId, idEvento } = req.body;
    

    // let newId = id.split('-')
    // newId = newId[newId.length-1] + ''
    // console.log('newId => ',newId)
    
    try {

        const user = await Users.findOne({
            where: {
                id: userId
            }

        });

        const event = await Events.findOne({
            where: {
                id: idEvento
            }
        });

        while (cantidad > 0) {
            const id = uuidv4();
            const createdTicket = await Tickets.create({
                id: id,
                propietario: user.fullName
            });
            console.log('Ticket creado: => ', createdTicket.dataValues)

            // createdTicket.dataValues.id = createdTicket.dataValues.id + newId;

            // console.log('id modf: => ', createdTicket.dataValues)
            
            await user.addTickets(createdTicket);

            await event.addTickets(createdTicket);
            
            cantidad--;
        }

        res.send('ticket creado correctamente');

    } catch (error) {
        next(error)
    }

}

async function getEventTickets(req, res){
    let { eventId } = req.query

    try {
       
        const eventTickets = await Tickets.findAll({
            where: {
                eventId: eventId
            },
            include: [
                {
                    model: Events
                },
                {
                    model: Users
                }
            ]
        });
        if (eventTickets.length > 0) return res.send(eventTickets);
        else {
            res.send([])
        }

    } catch (error) {
        next(error)
    }
}





module.exports = {
    getTickets,
    updateTicket,
    postTickets,
    getEventTickets
};
