import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "./studentcloud.png"
const Footer = () => {
  return (
    <footer className=" text-black py-4" style={{ backgroundColor:"grey"}}>
      <Container>
        <Row>
          <Col className="text-center"  > 
            <p>&copy; {new Date().getFullYear()} Your College Name. All rights reserved.</p>
            <p>
              Contact us at <a href="mailto:support@yourcollege.edu" className="text-black">support@yourcollege.edu</a>
            </p>
            <p>
              Follow us on 
              <a href="https://www.facebook.com/yourcollege" target="_blank" rel="noopener noreferrer" className="text-black mx-1"> Facebook</a>, 
              <a href="https://twitter.com/yourcollege" target="_blank" rel="noopener noreferrer" className="text-black mx-1"> Twitter</a>, and 
              <a href="https://www.instagram.com/yourcollege" target="_blank" rel="noopener noreferrer" className="text-black mx-1"> Instagram</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
