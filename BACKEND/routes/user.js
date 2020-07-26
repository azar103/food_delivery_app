const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
router.post('/', userCtrl.createUser);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;