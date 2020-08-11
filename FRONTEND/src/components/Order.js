import React, { useState } from 'react'
import './Order.scss'



export default function Order(props) {
    
    const { food, _id} = props.order

   return (
          <>
            <div className="order_block"
            >
            <b>{food.name}</b>
            <p>{parseFloat(food.price).toFixed(3)}DT</p>
            <div className="delete_quantity_block">    

               <i className="fa fa-trash"
               onClick={()=>props.onDelete(_id)}
               ></i> 

            </div>   
            </div>
            <hr/>
            </>
          
           
        )
}


