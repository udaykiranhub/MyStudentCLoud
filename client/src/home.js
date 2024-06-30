import React from 'react';
import { Container, Row, Col, Button ,Card} from 'react-bootstrap';
import { motion } from 'framer-motion';
import "./home.css"
import HomeCards from './homecard';
const Home = () => {
  return (
  
    <div className='title-container'>
  <center>  <div className='title'><h1>Student CLoud!</h1></div></center>
    <div className="home-container" style={homeContainerStyles}>

      <Container fluid className="home-content">

        <Row className="justify-content-center align-items-center text-center" style={{ height: '100vh' }}>
      
          <Col xs={12} sm={10} md={8} lg={6}>
            <motion.h1
              className="animated-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={h1Styles}
            >
             <h2 style={{color:"black"}}>WeLcOmE</h2>
     
            </motion.h1>
            <motion.p
              className="lead mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              style={pStyles}
            >
     <h4 style={{color:"black"}}>Students Interaction Platform!</h4>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            >

            </motion.div>
            <HomeCards/>
          </Col>
          </Row>
    
      </Container>

    </div>
    </div>
  );
};

const homeContainerStyles = {
  background: 'linear-gradient(white,blue,white)',
  color: 'white',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
};

const h1Styles = {
  fontSize: '4rem',
  fontWeight: 'bold'
};

const pStyles = {
  fontSize: '1.5rem'
};

export default Home;
