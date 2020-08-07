import React, { useState } from 'react'
import DashboardModal from './DashboardModal'
import { Table, Button } from 'reactstrap'
import './OrdersDashboard.scss'
import { connect } from 'react-redux'
import Order from '../Order'
import OrderDashboard from './OrderDashboard'
import TableModal from './TableModal'
import './OrderDashboard.scss'
 function OrdersDashboard(props) {
    const [inputValue, setInputValue] = useState('') 
    const [selectedValue, setSelectedValue] = useState('') 
    const filteredOrdersByFirstName = props.cart.filter(item => 
        item.firstName.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    )  
    const filteredFoodsByNameAndCity = props.cart.filter(order => 
        order.firstName.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 &&
        order.city.toLowerCase().indexOf(selectedValue.toLowerCase()) !== -1
    )

   const cartfilteredByNameSorted = filteredOrdersByFirstName.sort((a, b) => b.date-a.date)
   const cartfilteredByNameAndCitySorted = filteredFoodsByNameAndCity.sort((a, b) => b.date-a.date)
   const handleChangeName = e => {
       setInputValue(e.target.value)
   }
   const handleChangeCity = e => {
    setSelectedValue(e.target.value)
}

     return (

        <DashboardModal>
            {
                props.cart.length > 0
                ?
                <div className="orders_container">
          <div className="search">
          <input type="text" 
                className="orders_input"
                placeholder="search your Customer..."
                value={inputValue}
                onChange={(e) => handleChangeName(e)}
          />
          <select
           className="custom-select"
           style={{"width": "200px"}}
           
           onChange={e  => handleChangeCity(e)}
           value={selectedValue}
          >
              <option value="select a city">All Cities</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Tunis">Tunis</option>
          </select>
          </div>    
         <TableModal>
          <tr>
             <th>Order</th>
              <th>lastName</th>
              <th>firstName</th>
              <th>Date</th>
              <th>price</th>
              <th>#</th>
          </tr>    
          {
              selectedValue !== 'select a city'
              ?
              cartfilteredByNameAndCitySorted.map((cart, index) => 
              <OrderDashboard 
                  key={index}
                  cart={cart}
              />)
              :
              cartfilteredByNameSorted.map((cart, index) => 
              <OrderDashboard 
                  key={index}
                  cart={cart}
              />)
          }   

       </TableModal>
       </div>
       :
        <h1>No Orders</h1>

            }
          
        </DashboardModal>
    )
}
const mapStateToProps = (state) => {
    return {
         cart: state.manageCart.cart,
         users: state.userReducer.users
    }
}

export default connect(mapStateToProps)(OrdersDashboard)