const cartCtrl = require('../controllers/cart')
const express = require('express')
const router = express.Router()
router.get('/', cartCtrl.fetchItems)
router.post('/', cartCtrl.addItemToCart)
router.delete('/:id', cartCtrl.removeItemFromCart)

module.exports = router