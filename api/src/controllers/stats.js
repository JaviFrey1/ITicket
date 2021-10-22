const { Tickets, Users, Events } = require("../db.js");
const { finder } = require('./events')


function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}
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
                selledEvents.push(event[0].artist)
            })
            const data = []
            selledEvents.map(e => {
                const cantTickets = getTicketsPerEvent(selledEvents, e)
                data.push({ event: e, cant: cantTickets })
            })
            var stats = removeDuplicates(data, "event");

            return res.send(stats)
        }
        return res.send([])
    } catch (err) { console.log(err) }


}

async function timeVStickets(req, res){
    const {artist} = req.query
    function getTicketsSameDate(array, date) {
        var indices = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] === date) indices.push(i);
        }
        return indices.length;
    }
    try{
        const event = await Events.findOne({
            where:{artist:artist}
        })
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
        const data = []
        data.push({availableTickets: event.totalTickets, date:event.createdAt.toISOString().split('T')[0]})
        const eventTickets= tickets.filter(t=>t.eventId===event.id)
        const ticketsDates=[]
        const ticketsSelled=[]
        eventTickets? eventTickets.map(t=>ticketsDates.push(t.createdAt.toISOString().split('T')[0])) : res.send([])
        ticketsDates.map(d=>{
            const cant= getTicketsSameDate(ticketsDates, d)
            ticketsSelled.push({date:d, cant: cant})
        })
        const ticketsSelledUnique= removeDuplicates(ticketsSelled, 'date')
        let available = event.totalTickets
        while(available>0 && ticketsSelledUnique.length>0){
            ticketsSelledUnique.map(obj=>{
                available=available-obj.cant
                data.push({availableTickets:available, date:obj.date})
            })
            ticketsSelledUnique.shift()
        }
        data.push({availableTickets:available, date:event.date})
        console.log('data sin repetidos con inicio y fecha de expiracion del evento', data)
        return res.send(data)
    }catch(err){console.log(err)}

}

module.exports={
    getBest,
    timeVStickets
}