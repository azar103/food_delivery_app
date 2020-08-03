import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './SingleFood.scss'
import { AddToCart } from '../reducers/actions';
import Nav from './Nav';

import NavAuth from './NavAuth';
import { getOneFood } from '../reducers/foodActions';


function SingleFood(props) {
    
   
    const [counter, setCounter] = useState(1)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        props.dispatch(getOneFood(props.match.params.id))    
        setPrice(price*getCount())    
     
    },[])
   

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
    console.log(props.user)



    return (
        <>
        <Nav>
          <NavAuth />
        </Nav>    
        <div className="card_container">
            <img src={props.food.url} alt="food img" className="single_food_img"/>
            <div className="card_body">
                  <h3>{props.food.name}</h3>    
                  <p><b>price:</b> {parseFloat(getPrice(props.food.price)).toFixed(3)}DT</p>
                  <p><b>City:</b> {props.food.city}</p>
                     <p><b>Ingredients:</b>{props.food.ingredients.join(',')}</p>
          
                  {
                      props.auth===false ?
                      null
                      :
                      
                      <div className="add-minus-group">
                      <button className="add-minus"
                      onClick={() => setCounter(counter+1)}
                      >+</button>  
                      <span>{getCount()}</span>
                      <button className="add-minus"
                      onClick={() => setCounter(counter-1)}
                       >-</button>  
                      </div> 
               
                  }
                  { props.auth === true &&
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
             }
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