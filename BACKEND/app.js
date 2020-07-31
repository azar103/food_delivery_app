const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const foodRoutes = require('./routes/food');
const bodyParser = require('body-parser');
const config = require('config')
const db = config.get('mongoURI')
mongoose.connect(db,

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
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
app.use('/api/foods', foodRoutes);
module.exports = app;