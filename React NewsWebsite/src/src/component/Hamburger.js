import React, { Component } from 'react';
import add from "./add.png"
import Popdown from "../component/popdown"

const Hamburger = (props)=>{
    console.log(props)
    return(
       
    <img onClick={props.popFunc} src ={add} alt="Hamburger button" width="10%" className="p-2"></img>
    )
}

export default Hamburger