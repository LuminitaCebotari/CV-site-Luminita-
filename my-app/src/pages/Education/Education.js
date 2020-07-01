import React, { Component } from "react";
import "./Education.css";
import TimeLine from "./time-line.png"; 
import Skills from "./Skils.png"; 

class Education extends Component {
    state ={}; 

    render() {
        return (
            <div className="EducationPage" id="education">
                {/* <div className ="education-title">
                    <h2>Education</h2>
                    <h2>Web Developemnt Skills</h2>
                </div> */}
                <div className="education-content">
                    <div className="education-container">
                        <div className ="education-title">
                        <h2>Education</h2>
                        </div>
                        <div className="time-line-container">
                        <div className="time-line">
                        <img className = "time-line-img" src = {TimeLine} alt = "img" />
                        </div>
                        <div className="education-description">
                            <div className="education2020 text-descr">
                                <p className="title-descr">Front-end Web Develpment cours</p>
                                <p className="education-text">at Scoala Informala de IT of Cluj-Napoca</p>
                            </div>
                            <div className="education2019 text-descr">
                                <p className="title-descr">Masters Degree in Business Management</p>
                                <p className="education-text">Babes-Bolyai University of Cluj-Napoca Faculty of Economics and Business Administration </p>
                            </div>
                            <div className="education2017 text-descr">
                                <p className="title-descr">University diploma of Applied Modern Languages</p>
                                <p className="education-text">Babes-Bolyai University of Cluj-Napoca  Faculty of Latters, Applied Modern Languages ( French-English)</p>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className ="skills-container">
                    <div className ="education-title">
                        <h2>Web Developemnt Skills</h2>
                    </div>
                    <img className = "skills-img" src = {Skills} alt = "img" />
                    </div>

                </div>

            </div>
        )
    }

}

export default Education; 