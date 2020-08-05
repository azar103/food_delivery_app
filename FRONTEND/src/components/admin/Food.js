import React from 'react'
import './Food.scss'
import { Link } from 'react-router-dom'
export default function Food(props) {
    const {name, _id} = props.food
    return (
        <tr>
            <td>{name}</td>

            <td>
            <Link to={`/admin/foods/${_id}`}>
                <button className="btn btn_edit">edit</button>
                </Link>      
            </td>
            
            <td>
                <Link to={`/admin/delete/${_id}`}>
                <button className="btn btn_delete">delete</button>
                </Link>
           </td>
        </tr>
    )
}
