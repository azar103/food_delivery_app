const mongoose = require('mongoose')

const FoodSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type:Number, required: true},
    city: {type:String, required: true},
    url: {type:String, required: true},
    ingredients:{type: [String], required: true}
})

module.exports = mongoose.model('Food', FoodSchema)