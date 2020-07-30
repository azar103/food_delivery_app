const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth')
router.post('/', userCtrl.createUser);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.deleteUser);
router.get('/user/:id', userCtrl.getUser)


module.exports = router;