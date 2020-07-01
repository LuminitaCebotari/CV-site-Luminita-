import React, { Component } from "react";
import "./AboutMe.css";
import MyPhoto from "../../myPhoto1.jpg";


class AboutMe extends Component {

    state = {}; 

    render() {
        return(
    <div className = "page2-content" id="aboutMe">
        <div className = "AboutMeTitle">
            <h2>About Me:</h2>
        </div>
        <div className ="description-container">
            <div className ="description-text">
            <p>Hi, my name is Luminița. Currently,  
                I  have decited to make a big change in my career and to embrace
                 the univers of web developement.
                  Even though I am at the begining of this road I feel preaty optimistic as I descovered a true passion for it. </p>
            </div>
            <div className ="myPhoto">
                <img className="Photo" src={MyPhoto} />
            </div>
        
        </div>
        <div className="animation">

        </div>
      
     </div>
        )
    }
}

export default AboutMe; 