import React, { useState } from 'react'
import DashboardModal from './DashboardModal'
import './AddFood.scss'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { createFood } from '../../reducers/foodActions'
 function AddFood(props) {
   const [name, setName] = useState('')
   const [city, setCity] = useState('')
   const [price, setPrice] = useState('')
   const [url, setUrl] = useState('')
   const [ingredients, setIngredients] = useState('') 


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

   const addFood  = (name, city, price, url, ingredients) => {


         props.dispatch(createFood({name, city, price, url, ingredients}))

         swal('Food Added', "success")

   }
    return (
        <DashboardModal>
            <form className="form-group"
            onSubmit={(e) => {
                e.preventDefault()
                addFood(name, city, price, url, ingredients)
            }}
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
                   <input type="submit" value="create food" 
                   className="btn_submit"
                   />    
               </form>
        
        </DashboardModal>
    )
}

const mapStateToProps =(state) => {
   return {
       foods: state.foodReducer.foods
   }
}
export default connect(mapStateToProps)(AddFood)