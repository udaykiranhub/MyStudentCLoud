import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { json, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LoadingSpinner from "./spinner";

import Cookies from  "js-cookie";

import { backend_url } from "./path";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Error,setError]=useState(null);
    const navigate = useNavigate();
    const [load,setLoad]=useState(false);
 
    const data =  Cookies.get("user"); // Retrieve the cookie data    
    // Parse the JSON-encoded data
//Cookies is presant or not checking
if(data){
    const userData = JSON.parse(data);
//   alert("Cookie is alive")
async function getdata(){
    try{
    console.log("Cookie id is:"+userData.user_id);
    const  user = await fetch(`${backend_url}/cookie`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: userData.user_id }),
     
        
    });
    var res=await user.json();
    if(!res.message){
        navigate("/");
    }
   console.log("Cooke backend data is:"+res.data._id);
   alert("Cookie is alive")
    navigate(`/:${res.data._id}`, { state: {data:res}}); //
}
catch(err){
    alert("You Are Already Log out!");
}
    
}
getdata();       
 
}
//if cookies is alive user not nedd to login again
   

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
            setLoad(true);
            const response = await fetch(`${backend_url}/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseData = await response.json();
            console.log("response data is:", responseData);
            const MyId = responseData.data._id;
            if (responseData.message) {
                const expires = new Date(Date.now() + 60 * 60 * 1000); // Calculate expiration in milliseconds
                Cookies.set("user",JSON.stringify({"user_id":MyId}),{expires});
           
           //  alert("login successful!");
                setError("Login Sucessfull!");
                setLoad(false);
                navigate(`/:${MyId}`, { state: { data: responseData } });
            }

        } catch (err) {
        //   alert("Invalid Credentials!!");
        setLoad(false);
          setError("Invalid Credentials!");
        }
    }

    return (
    
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            {/* <Row className="w-50">
                <Col>
       */}
  

                    <div className="border p-4 rounded shadow">
                    <center> <h4  variant="primary" className="text text-success"
       style={{heigth:"10px",width:"100%",border:"1px solid black",backgroundColor:"lightgreen"}}>{Error}</h4></center>
      
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
                            {load && <LoadingSpinner/>}
                        </Form>
                 
                    </div>
                {/* </Col> */}
              
                
            {/* // </Row>
      */}
        </Container>
    );
}

export default Login;
