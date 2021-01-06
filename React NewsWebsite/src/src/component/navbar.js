import React, { Component } from "react";
import  { Link, NavLink } from "react-router-dom";
import Hamburger from "../component/Hamburger"


const Navbar = (props)=>{

  const handlePop=()=>{
   props.anotherFn();
  }
  // let ths  = props.anotherFn("show")
  // console.log(ths)
    return (
      <div className="container">
        <div className="brand-logo">
          <p> MY LOGO HERE </p>
        </div>
        <div className="navs-header">
          <NavLink to="/home">HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/contact/juj/extpath">CONTACT</NavLink>
          <Hamburger popFunc={handlePop}/>
        </div>
      </div>
    );
  }


export default Navbar;
