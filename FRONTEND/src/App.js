import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Orders from './components/Orders';
import Login from './components/Login';
import SingleFood from './components/SingleFood';

function App() {
  return (
    <>
      <Nav />
      <Switch>
          <Route  exact path="/"  component={Home} />
          <Route  path="/foods/:id" component={SingleFood} />
          <Route  exact path="/foods"  component={Home} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/about"   component={AboutUs} />
          <Route  path="/orders"   component={Orders} />
          <Route  path="/login"   component={Login} /> 
      </Switch>
    </>  
  );
}

export default App;
