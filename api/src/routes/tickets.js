const { Router } = require('express');
const { getTickets, updateTickets, postTickets  } = require('../controllers/tickets.js')


const router = Router();

router.get('/', getTickets);
router.put('/', updateTickets);
router.post('/', postTickets);


module.exports = router;