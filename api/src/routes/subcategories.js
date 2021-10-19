const { Router } = require('express');
const { getSubCategories } = require('../controllers/subCategories')


const router = Router();

router.get('/', getSubCategories)



module.exports = router;