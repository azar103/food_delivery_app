import React from 'react'
import './Food.scss'
import { Link } from 'react-router-dom'
export default function Food({food, onDeleteFood}) {
   console.log(food._id)
    return (
        <tr>
            <td>{food.name}</td>
            <td>
            <Link to={`/admin/foods/${food._id}`}>
                <button className="btn btn_edit">edit</button>
                </Link>      
            </td>
            
            <td>
            <i className="fa fa-trash"
               onClick={()=>{
                onDeleteFood(food._id)
                window.location.reload();
            }

            }
               ></i> 
           </td>
        </tr>
    )
}
