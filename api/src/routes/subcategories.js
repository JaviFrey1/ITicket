const { Router } = require('express');
const { getSubCategories } = require('../controllers/subCategories.js')


const router = Router();

// router.get('/', getSubCategories);
router.get('/', getSubCategories)



module.exports = router;