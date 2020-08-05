import React, { useEffect } from 'react'
import DashboardModal from './DashboardModal'
import TableModal from './TableModal'
import './FoodsDashboard.scss'
import { connect } from 'react-redux'

import Food from './Food'
import { getFoods } from '../../reducers/foodActions'
 function FoodsDashboard(props) {
   useEffect(() => {
     props.dispatch(getFoods())
   }, [])
   console.log(props.foods)
    return (

        <DashboardModal>
     
            <TableModal>
              <tr>
                <th >name</th>
                <th>#</th>
                <th>#</th>
              </tr>  
              {props.foods.map((food, index) => <Food 
              key={index}
              food={food}
              />)}
            </TableModal>

        </DashboardModal> 
    )
}


const mapStateToProps =(state) => {
  return {
      foods: state.foodReducer.foods
  }
}
export default connect(mapStateToProps)(FoodsDashboard)