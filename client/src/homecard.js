import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import StudentImg from './studentcloud.jpeg';
import educationImage from './brain.jpeg';
import "./card.css";

const HomeCards = () => {
  return (
  <div className='mycard'>
      <Container style={{position:"relative"}}>
      <Row className="justify-content-center">
        <Col >
          <Card style={{ width: '100%', margin: 'auto' }}>
            <Card.Img variant="top" src={StudentImg} alt="Student Interaction" />
            <Card.Body>
              <Card.Title>Student Interaction</Card.Title>
              <Card.Text>
                Engage with fellow students and participate in various interactive activities and discussions to enhance your learning experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
    </Container>
  </div>
  );
};

export default HomeCards;
