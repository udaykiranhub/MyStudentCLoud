import React from "react";
import { useLocation } from "react-router-dom";
import { PersonFill } from "react-bootstrap-icons";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Tilt} from "react-tilt";

function SingleUserDetails() {
  const location = useLocation(); // Access data passed through navigation state
  const user = location.state?.selectedUser;
  const date = new Date();
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
  return (
    <Container>
      <center>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="mt-4">
              <Card.Body className="text-center">
                <Card.Title>
                  <h1><PersonFill /></h1>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">User Details</Card.Subtitle>
   
                <Image src={user.image} alt="user profile" roundedCircle style={{ border: "2px solid blue", width: "150px", height: "150px" }} />
                <Card.Text>
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Skills:</strong> {user.skill}</p>
                  <p><strong>Experience:</strong> {user.exp}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                  <p><strong>DOB:</strong> {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </center>
    </Container>
  );
}

export default SingleUserDetails;
