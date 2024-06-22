import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Page Components
import Login from "./login";
import Toggle from './toggle';
import SignUp from './signup';
import People from './people';

import Mydata from "./myaccount"
import MyData from './myaccount';



function App() {
  return (
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
              
          
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
