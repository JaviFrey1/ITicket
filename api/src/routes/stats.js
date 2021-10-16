const { Router } = require('express');
const { getBest} = require('../controllers/stats.js')


const router = Router();

router.get('/', getBest);




module.exports = router;
