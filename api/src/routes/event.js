const { Router } = require('express');
<<<<<<< HEAD
const { AddEvent, updateEvent, deleteEvent, updateAvailable } = require('../controllers/event.js')
=======
const { AddEvent, updateEvent, deleteEvent } = require('../controllers/event')
>>>>>>> main


const router = Router();

router.post('/', AddEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent)
router.put('/', updateAvailable)



module.exports = router;
