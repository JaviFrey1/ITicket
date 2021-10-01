const { Router } = require('express');
const { filtroCategories, filtroSubCategories } = require('../controllers/filter.js');


const router = Router();

router.get('/cat', filtroCategories);
router.get('/sub', filtroSubCategories);



module.exports = router;