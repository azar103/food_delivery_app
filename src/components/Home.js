import React, { useEffect } from 'react'
import './Home.scss'
import { connect } from 'react-redux'
import { getFoods } from '../reducers/actions'
import Food from './Food'
 function Home(props) {

    useEffect(() => {
        getFoods()
    })
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
            <img  src="../../header.jpg" alt="header_image"/> 
      
        </section>
        <section className="home_search">
            <h2>Search your Food</h2>
            <div className="search_container">
                <input type="text" placeholder="Enter a name of food..."/>
                <img  src="../../search_img_section.jpg" alt="header_image"/> 
            </div>
        </section>
        <section className="home_foods">
            <h2 id="home_foods_title">Most Recent Foods</h2>
            <div className="foods_container">
              {props.foods.length>0 && props.foods.map((food, index) => <Food
                key={index}
                food={food}
              />)}
                
            </div>
            <div className="add_food">
                +
            </div>
        </section>
        </>
    )
}

const mapStateToProps = state => {
    return {
        foods: state.foods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFoods: () => dispatch(getFoods),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)