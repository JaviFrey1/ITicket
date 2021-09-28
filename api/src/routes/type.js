const { Router } = require('express');
const { getAllTypes} = require('../metodos/type');
const router = Router();


router.get('/', getAllTypes);


module.exports = router;