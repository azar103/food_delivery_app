import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if (isAuth === true) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
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