const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    lastName: {type: String, required: true},
    firstName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    tel: {type: Number, required: true}  
})
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema)