const { Router } = require('express');
const { bulkEvents } = require('../controllers/bulkevents.js')


const router = Router();

router.post('/', bulkEvents);



module.exports = router;
