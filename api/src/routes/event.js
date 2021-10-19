const { Router } = require('express');
const { AddEvent, updateEvent, deleteEvent, updateAvailable } = require('../controllers/event')


const router = Router();

router.post('/', AddEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent)
router.put('/', updateAvailable)



module.exports = router;
