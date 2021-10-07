const { Router } = require('express');
const { getCategories } = require('../controllers/categories')


const router = Router();

// router.get('/', getCategories);
router.get('/', getCategories)



module.exports = router;