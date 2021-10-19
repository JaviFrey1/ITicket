const { Router } = require('express');
const { getAllEvents, getEventById } = require('../controllers/events')


const router = Router();

router.get('/', getAllEvents);

router.get('/:id', getEventById);


module.exports = router;
