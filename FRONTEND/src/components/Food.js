import React from 'react'
import './Food.scss'
import { Link } from 'react-router-dom'
export default function Food(props) {
    const {url, name, _id} = props.food
    return (
          <Link to={`/foods/${_id}`}>
            <div className="card">
             <img src={url} alt="Avatar" className="img_food" />
             <div class="container">
             <h4><b>{name}</b></h4>
            </div>
            </div> 
        </Link>   
    )
}


