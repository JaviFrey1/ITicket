const { Router } = require('express');
const {ForgotPassword } = require('../controllers/forgotPassword')


const router = Router();


router.put('/', ForgotPassword);

module.exports = router;