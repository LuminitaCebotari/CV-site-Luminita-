import React, { Component } from "react";
import SocialMedia from "./socialMedia"; 
import "./ContactMe.css";

class ContactMe extends Component {
    state ={}; 

    render() {
        return (
            <div className="ContactMePage" id="contactMe">
                <div className= "ContctMeTilte">
                    <h2>Contact Me</h2>
                </div>
                <div className =" socialMedia">
                    <SocialMedia />
                </div>
                <div className ="mail-tel">
                    <p>Email: cebotari.luminita1@gmail.com</p>
                    <p>Tel: 0755522617</p>
                </div>


            </div>
        )
    }

}

export default ContactMe; 