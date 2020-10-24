import React, { Component } from "react";
import "./Home.css";
import Union from "../../layout-intro-img.png"; 

import Dots from "../../dots-layout.png";


class Home extends Component {

    state = {}; 

    render() {
        return(
            <div className ="content-section" id="home">

               <div className="presentation-section-left">
               
                  <div className = " hello-section">
                    <h1>Hey. Glad you are here!</h1>
               </div>
                  <div className="scroll-down-section">
                    <h2>Keep scrolling for a little about me</h2>
               </div>
                  <div className="bottom-layout-section">
               {/* <img className ="bottom-layout" src = {Dots} alt = "bottom-layout" /> */}
               <svg width="248" height="40" viewBox="0 0 248 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="circules " filter="url(#filter0_d)">
<ellipse id="circle3" cx="216.604" cy="25.597" rx="27.3955" ry="23.403" fill="url(#paint0_linear)"/>
<ellipse id="circle2" cx="124" cy="25.597" rx="27.3955" ry="23.403" fill="url(#paint1_linear)"/>
<ellipse id="circle1" cx="31.3955" cy="23.403" rx="27.3955" ry="23.403" fill="url(#paint2_linear)"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="248" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="216.604" y1="2.19403" x2="216.604" y2="49" gradientUnits="userSpaceOnUse">
<stop stop-color="#6A57BF"/>
<stop offset="0.543182" stop-color="#C49BBF" stop-opacity="0.863919"/>
<stop offset="0.9999" stop-color="#8476C1" stop-opacity="0.713542"/>
<stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
<stop offset="1" stop-color="#FFB8B8"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="124" y1="2.19403" x2="124" y2="49" gradientUnits="userSpaceOnUse">
<stop stop-color="#6A57BF"/>
<stop offset="0.543182" stop-color="#C49BBF" stop-opacity="0.863919"/>
<stop offset="0.9999" stop-color="#8476C1" stop-opacity="0.713542"/>
<stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
<stop offset="1" stop-color="#FFB8B8"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="31.3955" y1="0" x2="31.3955" y2="46.806" gradientUnits="userSpaceOnUse">
<stop stop-color="#6A57BF"/>
<stop offset="0.543182" stop-color="#C49BBF" stop-opacity="0.863919"/>
<stop offset="0.9999" stop-color="#8476C1" stop-opacity="0.713542"/>
<stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
<stop offset="1" stop-color="#FFB8B8"/>
</linearGradient>
</defs>
</svg>
               </div>
             </div>
                <div className ="logo-section-right">
                    <img className = "layout-right" src = {Union} alt = "img" />  
               
          
             </div>
           </div>
           
        )
    }
}

export default Home; 