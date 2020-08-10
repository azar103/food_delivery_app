const express = require('express')
const router = express.Router()
const foodCtrl = require('../controllers/food')
router.get('/', foodCtrl.getAllFoods)
router.post('/', foodCtrl.createFood)
router.delete('/:id', foodCtrl.deleteFood)
router.get('/:id', foodCtrl.getOneFood)
router.put('/:id', foodCtrl.editFood)

module.exports = router