const { Router } = require('express');
const { getSubCategories } = require('../controllers/subcategories.js')


const router = Router();

router.get('/', getSubCategories)



module.exports = router;