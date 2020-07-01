import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./header.css"



class NavBar extends Component {

    state = {}; 
    
    render() {
        return (

        <div className = "header">
          <div className="Name">
            <h2>Luminița Cebotari</h2>
          </div>
          <div className ="Menu">
          
            <Link
            className="buttons"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>Home</Link>

          
          
          <Link
            className="buttons"
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>About me </Link>
          
          
          <Link
            className="buttons"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>Education </Link>
          
        
          
          
          <Link
            className="buttons"
            activeClass="active"
            to="contactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>Contact Me </Link>
         
          </div>
          
          
       </div>
       )
    }

}

export default NavBar; 