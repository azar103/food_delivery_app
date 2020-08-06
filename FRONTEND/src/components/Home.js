import React, { useEffect, useState } from 'react'
import './Home.scss'
import { connect } from 'react-redux'

import { getFoods } from '../reducers/foodActions'
import Food from './Food'
import { Link} from 'react-router-dom'
import Nav from './Nav'
import NavAuth from './NavAuth'
import { getUser } from '../reducers/userActions'

 function Home(props) {

    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
   useEffect(() => {
            props.dispatch(getFoods())
            if(props.user !==null){
                props.dispatch(getUser(props.user.id))
            }      
   }, [])
   
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleChangeSelectValue = (e) => {
        setSelectedValue(e.target.value)
    }
    console.log(props.foods)
    const filteredFoodsByNameAndCity = props.foods.filter(food => 
        food.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 &&
        food.city.toLowerCase().indexOf(selectedValue.toLowerCase()) !== -1
    )
    const filteredFoodsByName= props.foods.filter(food => 
        food.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    ) 


    console.log(props.auth.redirectTo)
    return (
        <>
        <Nav>
             <NavAuth/>  
        </Nav>
        <section className="home_header">
            <div className="home_header_presentation">
                <h1><span id="title_span">Quick Food</span> delivery</h1>
                <p>
                    Order your foods at any time and we will deliver them directly to your home
                </p>
                <Link to="/orders">
            {
                props.auth === true &&
                <button id="read_btn">
                   Your orders
               </button>
               
            }
                
               </Link>  
            </div>
            <img id="header_image" src="../../header.jpg" alt="header_image"/> 
        </section>
        <section className="home_search">
            <h2>Search your Food</h2>
            <div className="search_container">
                <input type="text" 
                  placeholder="search your food by name and city..."
                  value={inputValue}
                  onChange={(text) => handleChange(text)}
                  />
                  <select
                    onChange={(value) => handleChangeSelectValue(value)}
                    value={selectedValue}
                    className="custom-select"
                    id="select"
                  >
                      <option value="Select a city" selected>Select a city</option>
                      <option value="Tunis">Tunis</option>
                      <option value="Bizerte">Bizerte</option>
                  </select>
                <img id="search_image"  src="../../search_img_section.jpg" alt="header_image"/> 
            </div>
        </section>
        <section className="home_foods">
            <h2 id="home_foods_title">Most Recent Foods</h2>
            <div className="foods_container">
              {
              selectedValue !== 'Select a city' ?
              filteredFoodsByNameAndCity.length>0 && filteredFoodsByNameAndCity.slice(0, 6).map((food, index) => <Food
                key={index}
                food={food}
              />).reverse()
              :
              filteredFoodsByName.length>0 && filteredFoodsByName.slice(0,6).map((food, index) => <Food
                key={index}
                food={food}
              />).reverse()
              }
                
            </div>
        </section>
        </>
    )
}

const mapStateToProps =(state) => {
    return {
        foods: state.foodReducer.foods,
        cart: state.manageCart.cart,
        auth: state.authReducer,
        user: state.authReducer.user,
        profile: state.userReducer.user
    }
}


export default connect(mapStateToProps)(Home)