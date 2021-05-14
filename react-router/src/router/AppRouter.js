import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Categories from "../pages/Categories";

export default function AppRouter() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route path="/profile/:username" component={Profile}/>
        <Route path="/categories" component={Categories}/>

        <Route exact path="*" component={NotFound}/>
      </Switch>
    </Router>)
};