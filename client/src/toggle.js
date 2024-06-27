import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import styled from 'styled-components';

import {Link} from "react-router-dom";

import { Nav } from 'react-bootstrap';


const ToggleContainer = styled.div`
  position: relative;
`;

const HamburgerContainer = styled.div`
  display: none;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 2;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-top: 60px; /* space for the hamburger icon */

  @media (min-width: 769px) {
    transform: none;
    position: relative;
    flex-direction: row;
    padding-top: 0;
    height: auto;
    width: 100%;
    box-shadow: none;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  padding: 15px 20px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }

  @media (min-width: 769px) {
    padding: 10px 15px;
    flex: 1;
    text-align: center;
    background-color: transparent;
    &:hover {
      background-color: #e6e6e6;
    }
  }
`;

const MenuList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

function Toggle() {
  const [isOpen, setOpen] = useState(false);

  return (
    <ToggleContainer>
      <HamburgerContainer>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </HamburgerContainer>
      <Sidebar isOpen={isOpen}>
        <MenuList style={{backgroundColor:"black"}}>
        <MenuItem><li ><Link to="/">Home</Link></li></MenuItem>
        <MenuItem><li><Link to="/users">users</Link></li></MenuItem>
          <MenuItem>   <li><Link to="/login">Login</Link></li></MenuItem>
          <MenuItem> <li><Link to="/signup">SignUp</Link></li></MenuItem>
          

          <MenuItem><li><Link to="/users">users</Link></li></MenuItem>
          <MenuItem><li ><Link to="/search">Search</Link></li></MenuItem>
          <MenuItem><li ><Link to="/">Home</Link></li></MenuItem>
          <MenuItem><li ><Link to="/about">About us</Link></li></MenuItem>
       
      
        </MenuList>
      </Sidebar>
    </ToggleContainer>
  );
}

export default Toggle;
