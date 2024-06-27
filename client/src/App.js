import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "./studentcloud.png";

import { useNavigate } from 'react-router-dom';

// Importing Page Components
import Login from "./login";
import Toggle from './toggle';
import SignUp from './signup';
import People from './people';


import MyData from './myaccount';
import Edit from './EditMyAccount';
import LogOut from './LogOut';
import ChangeProfile from './changeProfile';

import Data from './Allusers';

import SingleUserDetails from './singleuser';
import About from './about';


import Footer from './footer';
import Home from './home';

import Search from './search';

function App() {



  return (
    <div>
    <Router>
      
      <Container fluid>
        <Row>
        
       
        <Col    >
            <nav>
            <Toggle/>
                   
            </nav>
       
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/people" element={<People/>}/>
              <Route path="/:MyId" element={<MyData/>}/>
              <Route path="/editmyaccount" element={<Edit/>}/>
       
          <Route path="/logout" element={<LogOut/>}/>
          <Route path="/ProfileChange" element={<ChangeProfile/>}/>

          <Route path="/users" element={<Data/>}/>
          <Route path="/users/:userId" element={<SingleUserDetails />} />
          <Route path="/search" element={<Search/>}/>

          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          {/* <Route path="/back" element={<GoBack/>}/> */}
          
            </Routes>
    
          </Col>
        </Row>
        <Row>
          <Col>
          
          <Footer/>
          </Col>
        </Row>
      </Container>
    </Router>
    </div>
  );
}

export default App;
