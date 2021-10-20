const { Router } = require('express');
const { getRecommended } = require('../controllers/events')


const router = Router();

router.get('/', getRecommended);


module.exports = router;
