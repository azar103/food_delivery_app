import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardModal.scss'
export default function DashboardModal(props) {
    return (
        <div className="container_dashboard">
             <div className="left">
                   <Link to="/admin">
                   <h1 className="title">Dashboard</h1>
                   </Link>
                   <ul className="sections">
                       <li><Link 
                       to="/admin/orders"
                       >
                         Orders
                       </Link></li>
                       <li><Link to="/admin/users">
                         Users
                       </Link></li>
                       <li><Link to="/admin/foods">
                         Foods
                       </Link></li>
                       <li><Link to="/admin/newFood">
                         Create Food
                       </Link></li>
                   </ul>
             </div>
             <div className="right">
                   {props.children}
             </div>
        </div>
    )
}
