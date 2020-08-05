const Food = require('../models/Food')
exports.getAllFoods = (req, res, next) => {
    Food.find()
        .then((foods) => res.status(200).json(foods))  
        .catch(err => res.status(400).json(err))
}

exports.getOneFood =(req, res, next) => {
    Food.findOne({_id: req.params.id})
        .then((food) => res.status(200).json(food))
        .catch(err => res.status(404).json({err}))
}
exports.createFood = (req, res, next) => {
    const {name,city, price, url, ingredients} = req.body
    if(!name || !city || !price || !url|| !ingredients)
    {
        return res.status(400).json({message: 'Please enter all the fields!'})
    }
    Food.findOne({name})
        .then((food) => {
            if(food) return res.status(400).json({message: 'food already exist'})
            delete req.body._id
            const newFood = new Food({
              ...req.body
            })
          newFood.save()
             .then((item) => res.status(201).json(item))
             .catch(err => res.status(500).json({err}))
        })
        .catch(err => res.status(500).json({err}))
    
}
exports.deleteFood = (req, res, next) => {
   Food.findById({_id: req.params.id})
       .then((item) => item.remove().json({"message":"Food deleted"}) )
       .catch(err => res.status(404).json({err}))
}

exports.editFood = (req, res, next) => {
    const {name,city, price, url, ingredients} = req.body
    if(!name || !city || !price || !url|| !ingredients)
    {
        return res.status(400).json({message: 'Please enter all the fields!'})
    }
    Food.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(res => res.status(200).json({message: 'Food Updated'}))
        .catch(err => res.status(500).json({err}))
    
    }
