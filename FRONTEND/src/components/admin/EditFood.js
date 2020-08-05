import React, { useEffect, useState, useRef } from 'react'
import DashboardModal from './DashboardModal'
import { connect } from 'react-redux'
import { getOneFood, editFood } from '../../reducers/foodActions'
import swal from 'sweetalert'
import { isEmpty } from '../../Helpers/functions'


 function EditFood(props) {
    const prevError = useRef()
    useEffect(() => {
 
        const {error} = props
        prevError.current = error
        if(error !== prevError) {
             if(error.id === 'CREATE_FOOD_FAIL'){
                 setMsg(error.msg.message)
             }else {
                 setMsg(null)
             }
         }
        
       })
   const getFoodById =(id) => {
      const food =  props.foods.find(item => item._id === id)
      return food
   }

   const foodObj = getFoodById(props.match.params.id)
 
   const [name, setName] = useState(foodObj.name)
   const [city, setCity] = useState(foodObj.city)
   const [price, setPrice] = useState(foodObj.price)
   const [url, setUrl] = useState(foodObj.url)
   const [ingredients, setIngredients] = useState(props.food.ingredients) 
   const [msg, setMsg] = useState('')

   const onHandleChangeName =(e) => {

    setName(e.target.value)

  }

const onHandleChangeCity = (e) => {
    setCity(e.target.value)
}
const onHandleChangePrice =(e) => {
    setPrice(e.target.value)
}
const onHandleChangeUrl = (e) => {
    setUrl(e.target.value)
}
const onHandleChangeIngredients =(e) => {
    setIngredients(e.target.value.split(','))
}

const updateFood = (e,food) => {
    e.preventDefault()
    props.dispatch(editFood(props.match.params.id, food))
    if(isEmpty(msg) === true){
        swal('Food Updated', "", "success")
    }else {
        swal(msg, '', 'error')
    }
  }

    return (
        <DashboardModal>
          
           <form className="form-group"
               onSubmit={(e) => updateFood(e, {name, city, price, url, ingredients})}
            >
                  <label><b>Food Name</b></label>
                  <input type="text"  
                         placeholder="Name..." 
                         className="input"
                         name="name"
                         value={name}
                         onChange={e => onHandleChangeName(e)}       
                         />
                <label><b>City</b></label>      
                  <input 
                         type="text"  
                         placeholder="city..." 
                         className="input"
                         name="city"
                         value={city}
                         onChange={e => onHandleChangeCity(e)}
                         />
            <label><b>Price</b></label>           
                  <input 
                         type="number"  
                         placeholder="price..." 
                         className="input"
                         name="price"
                         value={price}
                         onChange={e => onHandleChangePrice(e)}
                         />
                   <label><b>url of image</b></label>               
                  <input 
                         type="text"  
                         placeholder="put your url here..." 
                         className="input"
                         name="url"
                         value={url}
                         onChange={e => onHandleChangeUrl(e)}
                         />
                 <label><b>ingredients</b></label>           
                  <textarea 
                         rows="30" cols="50"
                         placeholder="ingredients..." 
                         name="ingredients"
                         value={ingredients}
                        onChange={e => onHandleChangeIngredients(e)}
                         ></textarea>
                   <input type="submit" value="edit food" 
                   className="btn_submit"
                   />    
               </form>
        </DashboardModal>
    )
}

const mapStateToProps = (state) => {
    return {
        foods: state.foodReducer.foods,
        food: state.foodReducer.food,
        error: state.errorReducer
    }
}
export default connect(mapStateToProps)(EditFood)