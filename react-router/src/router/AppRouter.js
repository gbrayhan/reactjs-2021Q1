import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Payment from "../pages/Payment";
import PrivateRoute from "./PrivateRoute";
import CategoriesRouter from "./CategoriesRouter";

export default function AppRouter() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route path="/profile/:username" component={Profile}/>
        <Route path="/categories" component={CategoriesRouter}/>
        <Route path="/login" component={Login}/>
        <Route path="/sing-in">
          <Redirect to="/login"/>
        </Route>

        <Route path="/register" component={Register}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/payment" component={Payment}/>


        <PrivateRoute path="/404" component={Payment}/>
        <Route exact path="*">
          <Redirect to="/404"/>
        </Route>

      </Switch>
    </Router>)
};