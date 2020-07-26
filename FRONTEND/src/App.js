import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Orders from './components/Orders';
import Login from './components/Login';
import SingleFood from './components/SingleFood';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Nav />
      <Switch>
          <Route  exact path="/"  component={Home} />
          <Route  path="/foods/:id" component={SingleFood} />
          <Route  exact path="/foods"  component={Home} />
          <Route  path="/about"   component={AboutUs} />
          <Route  path="/orders"   component={Orders} />
          <Route  path="/login"   component={Login} /> 
          <Route  path="/signup"   component={SignUp} /> 
      </Switch>
    </>  
  );
}

export default App;
