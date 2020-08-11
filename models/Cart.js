const mongoose = require('mongoose')
const Food = require('./Food')

const CartSchema = mongoose.Schema({
    food: {
        foodId: {type: String, required: true},
        name: {type: String, required: true},
        price: {type: Number, required:true},
        city: {type: String, required: true},
        date: {type: Date, required: true, default: Date.now}
    },
    userId: {type: String, required: true},
})

module.exports = mongoose.model('Cart', CartSchema)