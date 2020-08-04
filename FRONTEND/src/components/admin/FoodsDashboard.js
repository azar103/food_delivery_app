import React from 'react'
import DashboardModal from './DashboardModal'
import TableModal from './TableModal'
import './FoodsDashboard.scss'
import { connect } from 'react-redux'
import { clearAllFoods } from '../../reducers/foodActions'
import Food from './Food'
 function FoodsDashboard(props) {
    return (

        <DashboardModal>
     
            <TableModal>
              <tr>
                <th>name</th>
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