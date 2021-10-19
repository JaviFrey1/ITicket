const { Router } = require('express');
const { checkPassword } = require('../controllers/checkPassword');


const router = Router();

router.get('/:id', checkPassword);




module.exports = router;
