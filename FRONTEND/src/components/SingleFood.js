import React from 'react'
import { connect } from 'react-redux'
import './SignleFood.scss'
function SingleFood(props) {
   const getFoodById = (id) => {
        const foodObject = props.foods.find(food => food.id === id);
        return foodObject;
    }
    const id = props.match.params.id 
    const foodObject = getFoodById(+id)
    return (
        <div className="card_container">
            <img src={foodObject.url} alt="food img" className="single_food_img"/>
            <div className="card_body">
                  <h3>{foodObject.name}</h3>    
                  <p><b>price:</b> {foodObject.price}$</p>
                  <p><b>Time delivery:</b> {foodObject.timeDilevery}</p>
                  <p><b>City:</b> {foodObject.city}</p>
                  <button className="order_btn">
                  <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" style={{color: "#FFF"}}></i> Place an order
                  </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        foods: state.foods
    }
}
export default connect(mapStateToProps)(SingleFood)