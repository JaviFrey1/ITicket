const { Router } = require('express');
const { ConfirmPass } = require('../controllers/confirmPassword');


const router = Router();

router.put('/:id', ConfirmPass);


module.exports = router;


