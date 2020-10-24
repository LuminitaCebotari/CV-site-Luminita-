import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import "./header.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 800px) {
    justify-content: flex-start;
    flex-flow: column nowrap;
    background-color: #64637A;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    a {

      margin-left: 10%;
      font-weight: 700;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <div className="Menue">
      <Ul className="buttonsContainer" open={open}>
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
            to="MyProjects"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>My Projects </Link>
          
        
          
          
          <Link
            className="buttons"
            activeClass="active"
            to="contactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration= {500}>Contact Me </Link>
    </Ul>
    </div>
    
  )
}

export default RightNav