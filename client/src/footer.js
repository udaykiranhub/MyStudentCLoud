import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "./studentcloud.png"

import  {Instagram,Facebook,TwitterX} from "react-bootstrap-icons"

const Footer = () => {
  return (
    <footer className=" text-black py-4" style={{color:"white", backgroundColor:"grey"}}>
      <Container>
        <Row>
          <Col className="text-center"  > 
            <p>&copy; {new Date().getFullYear()} Lendi Instituate of engineering and technology All rights reserved.</p>
            <p>
              Contact us at :<a href="mailto:support@yourcollege.edu" className="text-black">support@lendi.edu</a>
            </p>
            <p>
              Follow us on 
              <a href="https://www.facebook.com/yourcollege" target="_blank" rel="noopener noreferrer" className="text-black mx-1"><Facebook/>  Facebook</a>, 
              <a href="https://twitter.com/yourcollege" target="_blank" rel="noopener noreferrer" className="text-black mx-1"><TwitterX/>   Twitter</a>, and 
              <a href="https://www.instagram.com/yourcollege" target="_blank" rel="noopener noreferrer" className="text-black mx-1"> <Instagram/>   Instagram</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
