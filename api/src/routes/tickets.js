const { Router } = require('express');
const { getTickets, updateTicket, postTickets, getEventTickets  } = require('../controllers/tickets.js')


const router = Router();

router.get('/', getTickets);
router.put('/:id', updateTicket);
router.post('/', postTickets);
router.get('/event', getEventTickets)


module.exports = router;