const { Router } = require('express');
const { getUsers, getUserById, deleteUser, updateUser } = require('../controllers/users')


const router = Router();


router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);



module.exports = router;