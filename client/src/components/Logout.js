import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../reducers/authActions'

 function Logout(props) {
    return (
        <li>
          <Link to="/login"
              onClick={() => props.dispatch(logout())}       
            >Logout</Link>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.authReducer
    }
}
export default connect(mapStateToProps)(Logout)
