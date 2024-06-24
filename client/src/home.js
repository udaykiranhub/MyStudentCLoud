import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-container">
      <Container fluid className="home-content">
        <Row className="justify-content-center align-items-center text-center" style={{ height: '100vh' }}>
          <Col md={8}>
            <h1 className="animated-text">Congratulations!</h1>
            <p className="lead mb-4">Your platform for student interaction</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
