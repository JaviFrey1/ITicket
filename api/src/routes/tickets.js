const { Router } = require('express');
const { getTickets, updateTicket, postTickets  } = require('../controllers/tickets.js')


const router = Router();

router.get('/', getTickets);
router.put('/:id', updateTicket);
router.post('/', postTickets);


module.exports = router;