const { Router } = require('express');
const { getAllEvents, getEventsId } = require('../controllers/events.js')


const router = Router();

router.get('/', getAllEvents);

router.get('/:id', getEventsId);


module.exports = router;
