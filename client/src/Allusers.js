import React, { useState, useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Data() {
  const [users, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const url = "http://localhost:5000/users";

  const fetchData = async () => {
    try {
 
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
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
