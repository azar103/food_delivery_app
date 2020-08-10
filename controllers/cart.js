const Cart = require('../models/Cart')

exports.fetchItems = (req, res, next) => {
    Cart.find()
        .then((items) => res.status(200).json(items))
        .catch(err=> res.status(400).json({err}))
}

exports.addItemToCart = (req, res, next) => {
    const {foodId} = req.body.food
    Cart.findOne({foodId})
        .then(item => {
            if(item){
                return res.status(500).json({message: 'Item exist'})
            }
            delete req.body._id
            const newItem = new Cart({
                ...req.body
            })
            newItem.save()
            .then(item => res.status(200).json(item))
            .catch(err => res.status(500).json({err}))
        })
        .catch(err => res.status(500).json({err}))

}

exports.removeItemFromCart = (req, res, next) => {
    Cart.findById({_id: req.params.id})
        .then((item)=> item.remove().then(() => res.json({message: 'Item deleted'})))
        .catch(err => res.status(400).json({err}))
}


