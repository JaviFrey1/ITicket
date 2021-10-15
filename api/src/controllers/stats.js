const { Tickets, Users, Events } = require("../db.js");
const { finder } = require('./events')


async function getBest(req, res) {
    function getTicketsPerEvent(array, evento) {
        var indices = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] === evento) indices.push(i);
        }
        return indices.length;
    }
    try {
        const allEvents = await finder()
        const tickets = await Tickets.findAll({
            include: [
                {
                    model: Events
                },
                {
                    model: Users
                }
            ]
        });
        const selledEvents = []
        if (tickets.length > 0) {
            tickets.map(t => {
                const event = allEvents.filter(e => e.id === t.eventId)
                selledEvents.push(event)
            })
            const data = []
            selledEvents.map(e => {
                const cantTickets = getTicketsPerEvent(selledEvents, e)
                data.push({ event: e, cant: cantTickets })
            })

            let hash = {};
            const stats = data.filter(o => hash[o.e] ? false : hash[o.e] = true);
            return res.send(stats)
        }
        return res.send([])
    } catch (err) { console.log(err) }


}

module.exports={
    getBest
}