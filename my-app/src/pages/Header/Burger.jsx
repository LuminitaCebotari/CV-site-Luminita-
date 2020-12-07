import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import "./header.css";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  .burger {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#FFFFFF" : "#FFFFFF")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  .burger.active {
    display: inline-block;
    background-color: ${({ open }) => (open ? "#FFFFFF" : "#432AB0")};
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  };

  window.addEventListener(`scroll`, changeBackground);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className={burger ? `burger active` : `burger`} />
        <div className={burger ? "burger active" : "burger"} />
        <div className={burger ? "burger active" : "burger"} />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
