import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Burger from "./Burger";
import "./header.css"



class NavBar extends Component {

    state = {}; 
    
    render() {
        return (

        <div className = "header">
          <div className="Name">
            <h2>Luminița Cebotari</h2>
          </div>
          
          <div className="MenueSection"><Burger /></div>
          
       </div>
       )
    }

}

export default NavBar; 