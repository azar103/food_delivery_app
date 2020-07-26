const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
mongoose.connect('mongodb+srv://anis103:anis103@cluster0.9l7is.mongodb.net/FoodDeliveryDB?retryWrites=true&w=majority',
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Connexion  à MongoDB réussie !'))
.catch(()=> console.log('Connexion  à MongoDB échouée !'))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
module.exports = app;