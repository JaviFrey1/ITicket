const { Router } = require('express');
const { filtroCategories, filtroSubCategories, filtroLocalidad, filtroFecha } = require('../controllers/filter.js');


const router = Router();

router.get('/cat', filtroCategories);
router.get('/sub', filtroSubCategories);
router.get('/address', filtroLocalidad);
router.get('/date', filtroFecha);



module.exports = router;