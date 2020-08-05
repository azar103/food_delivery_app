import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './SingleFood.scss'
import { AddToCart } from '../reducers/actions';
import Nav from './Nav';

import NavAuth from './NavAuth';
import { getOneFood, getFoods } from '../reducers/foodActions';
import swal from 'sweetalert';


function SingleFood(props) {
    
   
    const [counter, setCounter] = useState(1)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        props.dispatch(getOneFood(props.match.params.id)) 
        props.dispatch(getFoods())   
        setPrice(price*getCount())    
    },[])
console.log(props.food)

    const getFood = (id) => {
        const food = props.foods.find(item => item._id === id)
        return food;
    } 
    
    const food = getFood(props.match.params.id) 
    const {name, city, price: priceFood, ingredients, url} = props.food
   console.log(food)
    const getCount =() => {
        if(counter < 0) {
            return 0
        }else {
            return counter
        }
    }
  
   const getPrice =(price) => {
       return price * getCount()
   }

   console.log(props.food)


    const getObj =() => {
        const {email, lastName, firstName, tel, address} = props.profile[0];
        const newObj = {
            userId: props.user.id,
            date: Date.now(),
            email: email,
            lastName: lastName,
            firstName: firstName,
            address: address,
            telephone: tel,
            ...props.food
        }
        newObj.price = getCount() * props.food.price

        return newObj
    }



    return (
        <>
        <Nav>
          <NavAuth />
        </Nav>    
        <div className="card_container">
            <img src={url} alt="food img" className="single_food_img"/>
            <div className="card_body">
                  <h3>{name}</h3>    
                  <p><b>price:</b> {parseFloat(getPrice(priceFood)).toFixed(3)}DT</p>
                  <p><b>City:</b> {city}</p>
                     <p><b>Ingredients:</b>{ingredients.join(',')}</p>
   
                      
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
                    const objUpdated = getObj();
                    const newObj = {
                        ...objUpdated,
                        isPressed: true
                    }
                    props.dispatch(AddToCart(newObj))
                   
               
                    
                }}
              >
                  
                  
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" 
                  style={{color: "#FFF"}
                  
                }  
                  >Add to cart</i>
                  </button>
             
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        foods: state.foodReducer.foods,
        food: state.foodReducer.food,
        cart: state.manageCart,
        auth: state.authReducer.isAuthenticated,
        user: state.authReducer.user,
        profile: state.userReducer.user
    }
}
export default connect(mapStateToProps)(SingleFood)