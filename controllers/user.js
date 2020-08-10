const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config')

exports.createUser = (req, res, next) => {
   const {lastName, firstName, email, password, address, tel} = req.body
   if(!lastName || !firstName || !email || !password || !address || !tel) {
     return res.status(400).json({message: 'Please enter all fields!'})
   }

   User.findOne({email})
       .then(user => {
          if(user) return res.status(400).json({message: 'User already exist'})
          const newUser = new User({
            lastName,
            firstName,
            email,
            password,
            address,
            tel
          })
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = hash;
              newUser.save()
                     .then(user => {
                             jwt.sign(
                               {id: user._id},
                               config.get('jwtSecret'),
                               {expiresIn: 86400},
                               (err, token) => {
                                 if (err) throw err;
                                 res.json({
                                  token, 
                                  user: {
                                    id: user._id,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email,
                                    password: user.password,
                                    tel: user.tel,
                                    address: user.address           
                                 }
                                })
                               } 
                             )
                              
                            }
                      ) 
                    
                      
                    }
                     ) 
            })
          })
          
     
}

exports.login = (req, res, next) => {
    const {email, password} = req.body
    if(!email || !password) {
      return res.status(400).json({message: 'Email/Password incorrect(s)'})
    }
 
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ message: "User does not exist  !" });
        }
        bcrypt.compare(password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ message: 'password not exist !' });
            }
            jwt.sign(
              {id: user._id},
              'RANDOM_KEY_SECRET',
              {expiresIn: 86400},
              (err, token) => {
                if(err) throw err;
                res.json({
                  token,
                  user: {
                    id: user._id,
                    email: user.email,
                    password: user.password,
                    name: user.name
     
                  }
                })
              }
        ) 
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Utilisateur supprimé'}))
        .catch(error => res.status(400).json({error}))

 }

exports.getUsers = (req, res, next) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }))

}
 exports.getUser = (req, res) => {
   User.find({_id: req.params.id})
       .select('-password')
       .then(user => res.json(user))
 }


