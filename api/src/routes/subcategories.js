const { Router } = require('express');
const { getSubCategories, addSubcategories } = require('../controllers/subcategories.js')


const router = Router();

// router.get('/', getSubCategories);
router.post('/', addSubcategories)



module.exports = router;