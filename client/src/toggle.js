import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import styled from 'styled-components';

import {Link} from "react-router-dom";

import { Nav } from 'react-bootstrap';
import {Button} from "react-bootstrap";
import {House,PersonAdd,PersonCheck,PeopleFill, PeaceFill, Search,ChatFill,Messenger} from "react-bootstrap-icons";

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
        {/* <MenuItem><li><Link to="/"><House/></Link></li><p style={{color:"white"}}>Home</p></MenuItem> */}

        <MenuItem>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
        <House />
        <p style={{ margin: 0, marginLeft: '8px' }}>Home</p>
      </Link>
    </MenuItem>

    <MenuItem>
      <Link to="/users" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      <PeopleFill/>
        <p style={{ margin: 0, marginLeft: '8px' }}>Users</p>
      </Link>
    </MenuItem>

        {/* <MenuItem><li><Link to="/users"><PeopleFill/></Link></li><p style={{color:"white"}}>Users</p></MenuItem> */}
        <MenuItem>
      <Link to="/getopinions" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      <Messenger/>
        <p style={{ margin: 0, marginLeft: '8px' }}>Messages</p>
      </Link>
    </MenuItem>

        {/* <MenuItem><li><Link to="/getopinions"><Messenger/></Link></li><p style={{color:"white"}}>Messages</p></MenuItem> */}
    
        <MenuItem>
      <Link to="/search" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      <Search/>
        <p style={{ margin: 0, marginLeft: '8px' }}>Search</p>
      </Link>
    </MenuItem>
        {/* <MenuItem><li><Link to="/search"><Search/></Link></li><p style={{color:"white"}}>Search</p></MenuItem> */}
        {/* <MenuItem><li><Link to="/users">users</Link></li></MenuItem> */}
          {/* <MenuItem><li><Link to="/login">Login</Link></li></MenuItem> */}
          <MenuItem>
      <Link to="/login" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      <PersonCheck/>
        <p style={{ margin: 0, marginLeft: '8px' }}>Login</p>
      </Link>
    </MenuItem>
      
          {/* <MenuItem><li><Link to="/login"><PersonCheck/></Link></li><p style={{color:"white"}}>Login</p></MenuItem> */}
          {/* <MenuItem><li><Link to="/signup">SignUp</Link></li></MenuItem> */}
          <MenuItem>
      <Link to="/signup" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      <PersonAdd/>
        <p style={{ margin: 0, marginLeft: '8px' }}>signup</p>
      </Link>
    </MenuItem>
      
{/* 

          <MenuItem><li><Link to="/signup"><PersonAdd/></Link></li><p style={{color:"white"}}>SignUp</p></MenuItem> */}

          {/* <MenuItem><li><Link to="/users">users</Link></li></MenuItem> */}

          {/* <MenuItem><li ><Link to="/search">Search</Link></li></MenuItem> */}

          {/* <MenuItem><li ><Link to="/">Home</Link></li></MenuItem> */}
          {/* <MenuItem><li ><Link to="/about">About us</Link></li></MenuItem> */}

          <MenuItem>
      <Link to="/about" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
      <ChatFill/>
        <p style={{ margin: 0, marginLeft: '8px' }}>About us</p>
      </Link>
    </MenuItem>

          {/* <MenuItem><li><Link to="/about"><ChatFill/></Link></li><p style={{color:"white"}}>About</p></MenuItem>
        */}

     
        </MenuList>
      </Sidebar>
    </ToggleContainer>
  );
}

export default Toggle;
