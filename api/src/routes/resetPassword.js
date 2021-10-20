const { Router } = require('express');
const {ReseteoPassword } = require('../controllers/resetPassword')


const router = Router();


router.put('/:id', ReseteoPassword);

module.exports = router;