import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
 import "./ContactMe.css";



export default function SocialMedia() {
    return (
        <div className="socialContainer">
            <div className = "links">
            
            <a
                href="https://www.facebook.com/Lumi.Cebotari?ref=bookmarks"
                target="_blank"
                rel="noopener noreferrer"
                className="facebool social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
                href="https://www.linkedin.com/in/cebotari-lumini%C8%9Ba-974756113/"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/lumi_c_/?hl=ro"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            </div>

            
        </div>
    );
}