import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import "./about.css";

const About = () => {
  return (
    <div className="about-container" style={aboutContainerStyles}>
      <Container fluid className="about-content">
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={h2Styles}
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={pStyles}
            >
              The Student Cloud is dedicated to creating a space for students to collaborate, learn, and grow together.
            </motion.p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-4">
          <Col xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card style={cardStyles} className='card1'>
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To empower students with the tools and resources they need to succeed in their academic and professional endeavors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card style={cardStyles} className='card2'>
                <Card.Body>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    To be the leading platform for student interaction, providing innovative solutions for a better educational experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const aboutContainerStyles = {
  backgroundColor: '#f7f7f7',
  padding: '4em 0',
  color: '#333',
  textAlign: 'center'
};

const h2Styles = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '0.5em'
};

const pStyles = {
  fontSize: '1.25rem',
  marginBottom: '2em'
};

const cardStyles = {
  margin: '1em',
  padding: '1em',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out'
};

export default About;
