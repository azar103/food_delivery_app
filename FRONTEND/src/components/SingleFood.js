import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './SingleFood.scss'
import { AddToCart } from '../reducers/actions';


function SingleFood(props) {
    
   
    const [counter, setCounter] = useState(1)
    const [price, setPrice] = useState(0)


    const getCount =() => {
        if(counter < 0) {
            return 0
        }else {
            return counter
        }
    }
    useEffect(() => {
        setPrice(price*getCount())
    })
   const getPrice =(price) => {
       return price * getCount()
   }
   const getFoodById = (id) => {
        const foodObject = props.foods.find(food => food.id === id);
  
        return foodObject;
    }
    const id = props.match.params.id 
  
    const foodObject = getFoodById(+id)

    const update =() => {
        const newObj = {...foodObject}
        newObj.price = getCount() * foodObject.price
        return newObj
    }

    return (
        <div className="card_container">
            <img src={foodObject.url} alt="food img" className="single_food_img"/>
            <div className="card_body">
                  <h3>{foodObject.name}</h3>    
                  <p><b>price:</b> {parseFloat(getPrice(foodObject.price)).toFixed(3)}DT</p>
                  <p><b>City:</b> {foodObject.city}</p>
                  <p><b>ingredients:</b>{foodObject.ingredients.join(',')}</p>
                  
                  <div className="add-minus-group">
                 <button className="add-minus"
                 onClick={() => setCounter(counter+1)}
                 >+</button>  
                 <span>{getCount()}</span>
                 <button className="add-minus"
                 onClick={() => setCounter(counter-1)}
                  >-</button>  
                 </div> 
                  <button className="order_btn"
                      onClick={() =>{
                        setPressed(true)  
                        const objUpdated = update();
                        props.dispatch(AddToCart(objUpdated))}}
                  >
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" style={{color: "#FFF"}}  
                  >Add to cart</i>
                  </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        foods: state.manageFoods.foods,
        cart: state.manageCart.cart
    }
}
export default connect(mapStateToProps)(SingleFood)