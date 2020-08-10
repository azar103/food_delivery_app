import React from 'react'
import DashboardModal from './DashboardModal'
import './homedashboard.scss'

export default function HomeDashboard(props) {
    return (
        <DashboardModal>
             <div className="right">
                    <div className="container_right">
                         <h1>Welcome to Dahsboard</h1>
                         <p>Here you can manage orders, manage articles and delete user accounts</p>  
                    </div>
                    <img 
                    className="img_dashboard"
                    src="https://image.freepik.com/vecteurs-libre/caractere-homme-affaires-assis-dans-bureau-derriere-lieu-travail-bureau-ecran-ordinateur_80328-218.jpg" alt="zaeeaz"/>                   
             </div>
        </DashboardModal>
    )
}
