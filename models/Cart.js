const mongoose = require('mongoose')


const CartSchema = mongoose.Schema({
    food: {
        foodId: {type: String, required: true},
        name: {type: String, required: true},
        price: {type: Number, required:true},
        city: {type: String, required: true}
    },
    userId: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Cart', CartSchema)