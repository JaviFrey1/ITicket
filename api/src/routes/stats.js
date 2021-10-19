const { Router } = require('express');
const { getBest, timeVStickets} = require('../controllers/stats.js')


const router = Router();

router.get('/', getBest);
router.get('/time', timeVStickets)



module.exports = router;
