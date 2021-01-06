import React, { Component, useEffect, useState } from 'react';
import Home from "./routes/home"
import {Link} from "react-router-dom";
import newsposts from "./newspostdemo";
import Input from "./input";
import burg2 from "./burg2.png"
import Fade from 'react-reveal/Fade';

const Header = (props)=>{
    const [value, setValue] = useState("");
    // const [posted, setPosted] = useState(newsposts);
    const [searchresult, setsearchResult] = useState("");
    const [divopen, setDivopen] = useState("div-ul");


    

    const handleInput = ()=>{
        props.pop();
    }

    const handleHamburger = ()=>{
       setDivopen("div-ul-open")
       if(divopen === "div-ul-open"){
           setDivopen("div-ul")
       }
    }

    const closeHamburger = ()=>{
        if(divopen === "div-ul-open"){
            setDivopen("div-ul")
        }
    }
   
   


    return(
        <div className="container">
            <div className="logo">
                <img src="./pic.png" alt="MY LOGO"/>
            </div>
            <div class="hamburger">
            <img onClick={handleHamburger} src={burg2} width="20px" alt="burg"/>
            </div>
        
            <div className={divopen}>
            <ul className="ul-cont">
                <Input val={props.searchvalue}  searchange={props.handledsearch} action={handleInput}/>
                <li onClick={props.click,closeHamburger} className="ul-li"><Link to = "/" className="link"> HOME </Link></li>
                <li onClick={props.click,closeHamburger} className="ul-li"><Link to = "/contact" className="link">CONTACT</Link></li>
                <li onClick={props.click,closeHamburger} className="ul-li"><Link to = "/aboutus" className="link">ABOUT US</Link></li>
                <li onClick={props.click,closeHamburger} className="ul-li"><Link to = "/newspage" className="link">NEWS</Link></li>
                <li onClick={props.click,closeHamburger} className="ul-li"><img src="" alt="PROFILE"/></li>
            </ul>
            </div>
            
        </div>
    )

}

export default Header;