const { Tickets, Users, Events } = require("../db.js");


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
            
            const createdTicket = await Tickets.create({
                propietario: user.fullName
            });
            
            await user.addTickets(createdTicket);

            await event.addTickets(createdTicket);
            
            cantidad--;
        }

        res.send('ticket creado correctamente');

    } catch (error) {
        next(error)
    }

}





module.exports = {
    getTickets,
    updateTicket,
    postTickets,
};
