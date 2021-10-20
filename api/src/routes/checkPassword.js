const { Router } = require('express');
const { checkPassword } = require('../controllers/checkPassword.js');


const router = Router();

router.get('/:id', checkPassword);




module.exports = router;
