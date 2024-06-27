import React, { useState, useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import ColorSpinner from "./colorSpinner";

import {backend_url} from "./path";
import {Tilt} from "react-tilt";


function Data() {
  const [users, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const [load,setLoad]=useState(true);

  const url = `${backend_url}/users`;
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  const fetchData = async () => {
    try {
 
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setLoad(false);
        setData(data.data);
        console.log("data is:"+data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchSingleUser = async (userId) => {
    try {
      const response = await fetch(`${url}/${userId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
    
      setSelectedUser(user);
      return user;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleUserClick = async (userId) => {
    try {
      const selectedUserObject = users.find((user) => user._id === userId);
      if (selectedUserObject) {
        navigate(`/users/${userId}`, { state: { selectedUser: selectedUserObject } });
      } else {
        const fetchedUser = await fetchSingleUser(userId);
        navigate(`/users/${userId}`, { state: { selectedUser: fetchedUser } });
      }
    } catch (error) {
      console.error("Error handling user click:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="mt-5">
    
      <h1 style={{color:"white",backgroundColor:"black"}}><center >All Users</center></h1>
   <center> {load && <ColorSpinner/>} </center>
      <Row xs={1} md={2} lg={3} className="g-4">
 
        {users.map((user) => (
          <Col key={user._id}>
            <Card className="h-100">
              <Card.Img variant="top" src={user.image} alt="user Profile" style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>Name: {user.name}</Card.Title>
                <Button variant="primary" onClick={() => handleUserClick(user._id)}>Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Data;
