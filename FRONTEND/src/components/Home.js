import React, { useEffect, useState } from 'react'
import './Home.scss'
import { connect } from 'react-redux'
import { getFoods } from '../reducers/actions'
import Food from './Food'
 function Home(props) {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        getFoods()
    })
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleChangeSelectValue = (e) => {
        setSelectedValue(e.target.value)
    }
    const filteredFoodsByNameAndCity = props.foods.filter(food => 
        food.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 &&
        food.city.toLowerCase().indexOf(selectedValue.toLowerCase()) !== -1
    )
    const filteredFoodsByName= props.foods.filter(food => 
        food.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    )
    return (
        <>
        <section className="home_header">
            <div className="home_header_presentation">
                <h1><span id="title_span">Quick Food</span> delivery</h1>
                <p>
                    Order your foods at any time and we will deliver them directly to your home
                </p>
                <button id="read_btn">
                 Your orders
               </button>
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
              filteredFoodsByNameAndCity.length>0 && filteredFoodsByNameAndCity.map((food, index) => <Food
                key={index}
                food={food}
              />)
              :
              filteredFoodsByName.length>0 && filteredFoodsByName.map((food, index) => <Food
                key={index}
                food={food}
              />)
              }
                
            </div>
            <div className="add_food">
                +
            </div>
        </section>
        </>
    )
}

const mapStateToProps =(state) => {
    return {
        foods: state.manageFoods.foods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFoods: () => dispatch(getFoods),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)