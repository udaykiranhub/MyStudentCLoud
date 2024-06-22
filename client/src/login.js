import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Error,setError]=useState(null);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email || !password) {
          //  alert('Please fill in all fields !!!');
            setError("Fill The Details!!")
            return;
        }

        console.log("email is:", email);
        console.log("password is:", password);

        let data = {
            password,
            email
        };

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseData = await response.json();
            console.log("response data is:", responseData);
            const MyId = responseData.data._id;
            if (responseData.message) {
             alert("login successful!");
                setError("Login Sucessfull!")
                navigate(`/:${MyId}`, { state: { data: responseData } });
            }

        } catch (err) {
        //   alert("Invalid Credentials!!");
          setError("Invalid Credentials!");
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-50">
                <Col>
                
      <center> <h4  variant="primary" className="text text-success"
       style={{heigth:"10px",width:"100%",border:"1px solid black",backgroundColor:"lightgreen"}}>{Error}</h4></center>


                    <div className="border p-4 rounded shadow">
                        <h1 className="text-center mb-4">Login To Your Account!</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your Email!"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Your Password!"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </Form.Group>
                            <br />
                            <Button variant="dark" type="submit" className="w-100">Login</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
