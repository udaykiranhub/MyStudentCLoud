import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { backend_url } from './path';

import { ToastContainer, toast } from 'react-toastify';

import Notification from "./notification";
import ColorSpinner from './colorSpinner';
import LoadingSpinner from './spinner';

function Opinion({ data }) {
const [load,setLoad]=useState(false);

  console.log("Opinion data is: " + data);
  const [message, setMessage] = useState('');
  const [noti,setNoti]=useState(true)
useEffect(()=>{
setNoti(false)
},[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       setLoad(true)
      const response = await fetch(`${backend_url}/sendopinion`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: data, message }),
      });
      const result = await response.json();
      if (result.message) {
        setLoad(false)
        setNoti(true)
        alert('Message sent successfully!');
      } 
     setNoti(false)
    } catch (error) {
      console.error('Error:', error);
      alert("something went wrong!");
      setLoad(false)
    }

    setNoti(false)
  };

  return (
<>
{/* {noti && <Notification message="Sucessfully Login to your Account!" type="success" />} */}

    <Container className="mt-5">
      <Row className="justify-content-md-center">
        

        <Col md="6">
    
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter your thoughts!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
         {load &&  <ColorSpinner/>}
         <br/>
            <Button variant="primary" type="submit">
              Publish
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Opinion;
