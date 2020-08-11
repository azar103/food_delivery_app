import React, { useEffect } from 'react'
import DashboardModal from './DashboardModal'
import TableModal from './TableModal'
import './FoodsDashboard.scss'
import { connect } from 'react-redux'

import Food from './Food'
import { getFoods, deleteFood } from '../../reducers/foodActions'

 function FoodsDashboard(props) {

  const onDeleteFood = (id) => {
    props.dispatch(deleteFood(id))
  }
  useEffect(() => {
    props.dispatch(getFoods())
  }, [])
 
console.log(props)
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
              onDeleteFood={onDeleteFood}
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