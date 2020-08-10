import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthAdmin, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (isAuthAdmin === true) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/admin',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;