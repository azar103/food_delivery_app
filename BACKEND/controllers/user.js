const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
          .then(hash => {
            const user = new User({
                lastName: req.body.lastName,
                firstName: req.body.firstName,
                email: req.body.email,
                password: hash,
                address: req.body.password,
                tel: req.body.tel
            });
            user.save()
                .then(() => res.status(201).json({message: 'Utiliasteur enregistré'}))
                .catch(error => res.status(400).json({error}))
          })
          .catch((error) => res.status(500).json({error}))
}

exports.login = (req, res, next) => {
     User.findOne({email: req.body.email})
         .then((user) => {
             if(!user) {
                 return res.status(401).json({error: 'Utilisteur non trouvé'})
             }
             bcrypt.compare(req.body.email, user.email)
                   .then((valid) => {
                       if(!valid) {
                           return res.status.json({error:'Mot de passe non trouvé'})
                       }
                       res.status(200)
                          .json({
                              userId: user._id,
                              token: jwt.sign({
                                  userId: user._id,
                              },
                              'RANDOM_TOKEN_SECRET',
                              {
                                expiresIn :'24h'
                              })
                          });
                   })
         })
         .catch(error => res.status(500).json({error}))
}

exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Utilisateur supprimé'}))
        .catch(error => res.status(400).json({error}))
 }

