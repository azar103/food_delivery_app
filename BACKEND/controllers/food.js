const Food = require('../models/Food')
exports.getAllFoods = (req, res, next) => {
    Food.find()
        .then((foods) => res.status(200).json(foods))  
        .catch(err => res.status(400).json(err))
}
exports.createFood = (req, res, next) => {
    delete req.body._id
    const food = new Food({
        ...req.body
    })
    food.save()
        .then(() => res.status(201).json({message: 'Food Created!!'}))
        .save(err => res.status(500).json({err}))
}
exports.deleteFood = (req, res, next) => {
    
}
