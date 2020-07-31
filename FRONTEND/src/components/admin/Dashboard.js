import React from 'react'
import './dashboard.scss'
import { Link } from 'react-router-dom'

export default function Dhashboard() {
    return (
        <div className="container_dashboard">
             <div className="left">
                   <h1 className="title">Dashboard</h1>

                   <ul className="sections">
                       <li><Link >
                         Orders
                       </Link></li>
                       <li><Link >
                         Users
                       </Link></li>
                       <li><Link >
                         Foods
                       </Link></li>
                   </ul>
             </div>
             <div className="height">
                   col-4
             </div>
        </div>
    )
}
