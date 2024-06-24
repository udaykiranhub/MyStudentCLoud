import React, { useState } from "react";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import { Person, PencilSquare, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./App.css";
import GoBack from "./goback";
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

//notification creation
import Notification from "./notification";

function MyData() {
 const [showNotification,setShowNotification]=useState(false);
 const [status,setStatus]=useState(null);
 const [mess,setMess]=useState(null);

    const location = useLocation();
    const user = location.state?.data;
    const navigate = useNavigate();

    console.log("user is:", user);
    const date = new Date(user.data.dob);
    console.log("user data  in myaccount is:"+user);
useEffect(()=>{
setShowNotification(true);
},[])

    const handleClick = (userId) => {
    
        navigate("/editmyaccount", { state: { EditData: userId } });
       
      // alert("Edit Now!");
    }

    //LogOut
    const handleLogOut = (userId) => {
        navigate("/logout", { state: { userId } });
    }

    //profile Changing
    const handleProfile = (userId) => {
        // setMess("Hiiii");
        // setStatus("error");
      
        navigate("/ProfileChange", { state: { userId } })
    }

    function handleGoBack() {

        navigate("/");
    }

    return (
        <Container>
            <center>

            {showNotification && <Notification message="Sucessfully Login to your Account!" type="success" />}
                <Row>
                    <Col>
                        <div id="mydata">
                            <h1><i><Person /></i> My Account.. </h1>
                            <br />
                            <Card>
      <Card.Img
        src={user.data.image}
        alt="my profile"
        style={{
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          margin: '20px auto' // Center the image horizontally and add some margin
        }}
      />
    </Card>
                            <br />
                            <Button variant="outline-dark" size="sm" onClick={() => handleProfile(user.data._id)}><i><PencilSquare /></i> Profile</Button>
                            <br />
                            <br />
                            <br />
                            <div className="user-details-container" style={{backgroundColor:"lighgreen"}}>
                                <Row>
                                      {/* User details box */}
                                      <Col xs={12} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <Card.Title>User Details</Card.Title>
                                                <Card.Text><span>Name:</span> {user.data.name}</Card.Text>
                                                <Card.Text><span>DOB:</span> {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</Card.Text>
                                                <Card.Text><span>Address:</span> {user.data.address}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                  
                            
                                    {/* Additional details box */}
                            
                                    <Col xs={12} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <Card.Title>Additional Details</Card.Title>
                                                <Card.Text><span>Email:</span> {user.data.email}</Card.Text>
                                                <Card.Text><span>Bio:</span> {user.data.bio}</Card.Text>
                                                <Card.Text><span>Skills:</span> {user.data.skill}</Card.Text>
                                                <Card.Text><span>Experience:</span> {user.data.exp}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                        </Col>
                                          {/* Settings box */}
                                    <Col xs={12} lg={4}>
                                        <Card className="mb-3" >
                                            <Card.Body>
                                                <Card.Title>Settings:</Card.Title>
                                                <Button variant="outline-dark" size="sm" onClick={() => handleClick(user.data._id)}><i><PencilSquare /></i> Edit</Button>
                                                <br />
                                                <br />
                                                <Button variant="outline-dark" size="sm" onClick={() => handleLogOut(user.data._id)}><i><Trash /></i> LogOut</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                  
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Button variant="dark" onClick={handleGoBack}>bAcK</Button>
    
            </center>
   
        </Container>
    );
};

export default MyData;
