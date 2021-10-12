const { Tickets, Users, Events } = require("../db.js");


async function getTickets(req, res, next) {

    let { idUser } = req.query

    try {
        console.log('IDDDDDDDDDDDDDDDDDDDDDDDD', idUser)
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

async function postTickets(req, res, next) { // User.addTickets(ticket)  Events.addTickets(ticket)

    let { cantidad, userId, idEvento } = req.body;
    console.log('estoy en back', req.body.idEvento)
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
            console.log('sere una cantidad',cantidad)
            const createdTicket = await Tickets.create({
                propietario: user.fullName
            });
            console.log('SOY EL TICKET',createdTicket, 'aun no se QUIEN ES MI USUARIO')
            await user.addTickets(createdTicket);

            await event.addTickets(createdTicket);
            console.log('soy COMPLETO',createdTicket)
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
