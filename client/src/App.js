import React, { useEffect } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Login from "./components/Login";
import SingleFood from "./components/SingleFood";
import SignUp from "./components/SignUp";
import HomeDashboard from "./components/admin/HomeDashboard";
import OrdersDashboard from "./components/admin/OrdersDashboard";

import FoodsDashboard from "./components/admin/FoodsDashboard";
import UserSheet from "./components/admin/UserSheet";
import UsersDashboard from "./components/admin/UsersDashboard";
import DeletedUser from "./components/admin/DeletedUser";
import AddFood from "./components/admin/AddFood";
import EditFood from "./components/admin/EditFood";
import DeleteFood from "./components/admin/DeleteFood";
import ProtectedRoute from "./components/ProtectedRoute";

import { connect } from "react-redux";
import DeleteOrder from "./components/DeleteOrder";

function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/foods/:id" component={SingleFood} />
      <Route exact path="/foods" component={Home} />
      <ProtectedRoute
        path="/orders/:id"
        isAuth={props.auth.redirectTo}
        component={DeleteOrder}
      />
      <ProtectedRoute
        path="/orders"
        isAuth={props.auth.redirectTo}
        component={Orders}
      />
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />

      <ProtectedRoute
        path="/admin/newFood"
        isAuth={props.auth.redirectToAdmin}
        component={AddFood}
      />
      <ProtectedRoute
        path="/admin/foods/:id"
        isAuth={props.auth.redirectToAdmin}
        component={EditFood}
      />
      <ProtectedRoute
        path="/admin/foods"
        isAuth={props.auth.redirectToAdmin}
        component={FoodsDashboard}
      />
      <ProtectedRoute
        path="/admin/users/:id"
        isAuth={props.auth.redirectToAdmin}
        component={DeletedUser}
      />
      <ProtectedRoute
        path="/admin/users"
        isAuth={props.auth.redirectToAdmin}
        component={UsersDashboard}
      />
      <ProtectedRoute
        path="/admin/orders"
        isAuth={props.auth.redirectToAdmin}
        component={OrdersDashboard}
      />
      <ProtectedRoute
        path="/admin/user/:id"
        isAuth={props.auth.redirectToAdmin}
        component={UserSheet}
      />
      <ProtectedRoute
        path="/admin/delete/:id"
        isAuth={props.auth.redirectToAdmin}
        component={DeleteFood}
      />

      <ProtectedRoute
        path="/admin"
        isAuth={props.auth.redirectToAdmin}
        component={HomeDashboard}
      />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};
export default connect(mapStateToProps)(App);
