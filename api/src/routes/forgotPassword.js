const { Router } = require('express');
const {ForgotPassword } = require('../controllers/forgotPassword.js')


const router = Router();


router.put('/', ForgotPassword);

module.exports = router;