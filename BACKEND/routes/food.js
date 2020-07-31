const express = require('express')
const router = express.Router()
const foodCtrl = require('../controllers/food')
router.get('/', foodCtrl.createFood)
router.post('/', foodCtrl.createFood)
router.delete('/:id', foodCtrl.getAllFoods)

module.exports = router