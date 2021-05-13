import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "../layout/Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="*" component={NotFound}/>
      </Switch>
    </Router>)
};