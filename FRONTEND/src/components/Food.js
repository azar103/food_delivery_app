import React from 'react'
import './Food.scss'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'
 function Food(props) {
    const {url, name, _id} = props.food
    const NotAuthenticated =() => {
      
        swal('You must sign in before',"","error")
            return(
                <Redirect to="/"/>
            )    
   }

    return (
          <>
          {props.auth === true ?
          
          <Link to={`/foods/${_id}`}>
            <div className="card">
             <img src={url} alt="Avatar" className="img_food" />
             <div class="container">
             <h4><b>{name}</b></h4>
            </div>
            </div> 
          </Link>   
          :
          <Link onClick={() => NotAuthenticated()}>
          <div className="card">
           <img src={url} alt="Avatar" className="img_food" />
           <div class="container">
           <h4><b>{name}</b></h4>
          </div>
          </div> 
        </Link>   
        }
          
        </>  
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer.isAuthenticated
    }
}
export default connect(mapStateToProps)(Food)


