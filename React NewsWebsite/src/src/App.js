import React, { Component } from "react";
import Home from "./component/home";
import About from "./component/aboutus";
import Contact from "./component/contact";
import Navbar from "./component/navbar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Userpost from "./component/userpost"
import Popdown from "./component/popdown"

class App extends Component {
  state = {
    popDownClass:'show'
  };
  render() {
    
   
   const handleClass=()=>{
      this.setState({
        popDownClass:(this.state.popDownClass === "show")?"hide":"show"
      });
    }
    return (
      <BrowserRouter>
      <Navbar anotherFn={handleClass}/>
      <Popdown theclass={this.state.popDownClass} />
      <Route exact path = '/home' component = {Home}/>
      <Route path = '/about' component = {About}/>
      <Route path = '/contact/juj/extpath' component = {Contact}/>
      <Route path = '/:userpost_id' component = {Userpost}/>
      </BrowserRouter>
    );
  }
}

export default App;
