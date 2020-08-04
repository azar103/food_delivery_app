import React, { useEffect } from 'react'
import DashboardModal from './DashboardModal'
import './DeleteFood.scss'
import { connect } from 'react-redux'
import { deleteFood, getOneFood } from '../../reducers/foodActions'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'
 function DeleteFood(props) {
   useEffect(() => {
       props.dispatch(getOneFood(props.match.params.id))
   },[])  
    const  onDelete =(id) => {
        props.dispatch(deleteFood(id))
        swal('Food Deleted', "", "success")
    } 
    return (
        <DashboardModal>
            <div className="delete_box_container">
                 <h1>Are you sure to delete {props.food.name} ?</h1> 
                 <button className="delete_btn"
                 onClick={() =>{
                     onDelete(props.match.params.id)
                 }}
                 >
                     delete
                 </button>   
            </div>
        </DashboardModal>
    )
}
const mapStateToProps = (state) => {
    return {
       food: state.foodReducer.food
    }
}
export default connect(mapStateToProps)(DeleteFood)