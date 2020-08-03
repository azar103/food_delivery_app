import React, { useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Orders from './components/Orders';
import Login from './components/Login';
import SingleFood from './components/SingleFood';
import SignUp from './components/SignUp';
import HomeDashboard from './components/admin/HomeDashboard';
import OrdersDashboard from './components/admin/OrdersDashboard';

import FoodsDashboard from './components/admin/FoodsDashboard';
import UserSheet from './components/admin/UserSheet';
import UsersDashboard from './components/admin/UsersDashboard';
import DeletedUser from './components/admin/DeletedUser';
import AddFood from './components/admin/AddFood';

function App(props) {

  return (
    <>

      <Switch>
          <Route  exact path="/"  component={Home} />
          <Route  path="/foods/:id" component={SingleFood} />
          <Route  exact path="/foods"  component={Home} />
          <Route  path="/about"   component={AboutUs} />
          <Route  path="/orders"   component={Orders} />
          <Route  path="/login"   component={Login} /> 
          <Route  path="/signup"   component={SignUp} /> 
          <Route path="/admin/newFood" component={AddFood} />
          <Route path="/admin/foods" component={FoodsDashboard} />
          <Route path="/admin/users/:id" component={DeletedUser} />
          <Route  path="/admin/users" component={UsersDashboard} />
          <Route path="/admin/orders" component={OrdersDashboard}/>
          <Route path="/admin/user/:id" component={UserSheet} />

          <Route  path="/admin" component={HomeDashboard}/>
      
      </Switch>
    </>  
  );
}
export default App