import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './SingleFood.scss'
import { AddToCart, pressButton } from '../reducers/actions';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/authActions';
import Logout from '../components/Logout'
import NavAuth from './NavAuth';


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
    const getObj =() => {
        const {email, lastName, firstName, tel} = props.profile[0];
        const newObj = {
            userId: props.user.id,
            email: email,
            lastName: lastName,
            firstName: firstName,
            telephone: tel,
            ...foodObject
        }
        newObj.price = getCount() * foodObject.price
        console.log(newObj)
        return newObj
    }
  

    const handlePress = (id) => {
       if(id === props.user.userId){
           props.dispatch(pressButton())
       }
    }
     
    return (
        <>
        <Nav>
          <NavAuth />
        </Nav>    
        <div className="card_container">
            <img src={foodObject.url} alt="food img" className="single_food_img"/>
            <div className="card_body">
                  <h3>{foodObject.name}</h3>    
                  <p><b>price:</b> {parseFloat(getPrice(foodObject.price)).toFixed(3)}DT</p>
                  <p><b>City:</b> {foodObject.city}</p>
                  <p><b>ingredients:</b>{foodObject.ingredients.join(',')}</p>

                  {
                      props.auth==false ?
                      null
                      :
                      
                      props.isPressed === false?
                      <div className="add-minus-group">
                      <button className="add-minus"
                      onClick={() => setCounter(counter+1)}
                      >+</button>  
                      <span>{getCount()}</span>
                      <button className="add-minus"
                      onClick={() => setCounter(counter-1)}
                       >-</button>  
                      </div> 
                      :
                      <div className="add-minus-group">
                      <button
                      disabled
                      className="add-minus"
                      onClick={() => setCounter(counter+1)}
                      >+</button>  
                      <span disabled>{getCount()}</span>
                    
                      <button 
                      disabled
                      className="add-minus"
                      onClick={() => setCounter(counter-1)}
                       >-</button>  
                      </div> 
                  }
                  { props.auth == true &&
                  <button className="order_btn"
                  onClick={() =>{
                    const objUpdated = getObj();
                    console.log(""+props.cart) 
                    props.dispatch(AddToCart(objUpdated))
                    handlePress(props.user.userId)
                }}
              >
                  
                  
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" 
                  style={{color: "#FFF"}
                  
                }  
                  >Add to cart</i>
                  </button>
             }
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        foods: state.manageFoods.foods,
        cart: state.manageCart.cart,
        isPressed: state.pressedButton.isPressed,
        auth: state.authReducer.isAuthenticated,
        user: state.authReducer.user,
        profile: state.userReducer.user
    }
}
export default connect(mapStateToProps)(SingleFood)