import { useState, useRef } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Person } from 'react-bootstrap-icons';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);


  const [Error,setError]=useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!name || !email || !password || !selectedImage) {
      //alert('Please fill in all fields and select an image.');
      setError("Fill the Details!");
      return;
    }
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', selectedImage);
    console.log("form data is:", formData);
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();
  
      if (responseData.success) {
    // alert(responseData.message);
       setError(responseData.message);
      } else {
   // alert(responseData.message);
     setError(responseData.message);
      }
    } catch (error) {
     // alert('An error occurred. Please try again later.');
     setError("Please try again later")
    }
  };
  
  function Back() {
    window.history.back(-1);
  }

  return (
    <Container className="d-flex justify-content-center">
     
      <Row className="w-50">
    
        <Col>
    
          <div className="signup-form mt-5 p-4 border rounded shadow">
            <h1><Person/></h1>
         
            <h1 className="text-center">Sign Up</h1>

      <center> <h4  variant="primary" className="text text-success"
       style={{heigth:"10px",width:"100%",border:"1px solid black",backgroundColor:"lightgreen"}}>{Error}</h4></center>
            <Form onSubmit={handleSubmit} id="signForm">
              <Form.Group controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Enter Your Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
              <br/>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <br/>
              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter Your Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <br/>
              <Form.Group controlId="image">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageChange}
               required />
              </Form.Group>
              <br/>
              <Button variant="info" type="submit" className="w-100">Sign Up</Button>
            </Form>
            <br/>
            <Button variant="danger" onClick={Back} className="w-100">Back</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
