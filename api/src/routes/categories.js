const { Router } = require('express');
const { getCategories, addCategories } = require('../controllers/categories.js')


const router = Router();

// router.get('/', getCategories);
router.post('/', addCategories)



module.exports = router;