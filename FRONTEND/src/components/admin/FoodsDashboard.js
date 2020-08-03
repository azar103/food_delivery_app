import React from 'react'
import DashboardModal from './DashboardModal'
import TableModal from './TableModal'
import './FoodsDashboard.scss'
export default function FoodsDashboard() {
    return (

        <DashboardModal>
     
            <TableModal>
              <tr>
                <th>name</th>
                <th>price</th>
                <th>city</th>
                <th>#</th>
              </tr>  
            </TableModal>
        </DashboardModal> 
    )
}
