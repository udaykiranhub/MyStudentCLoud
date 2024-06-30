import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Notification from "./notification";

import { backend_url } from "./path";

function Edit() {
    const [bio, setBio] = useState("");
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [exp, setExp] = useState("");

  
    const [showNotification,setShowNotification]=useState(false);

    const [notificationMessage, setNotificationMessage] = useState("Edit now"); // State to hold notification message
    const [notificationType, setNotificationType] = useState("success"); // State to hold notification type
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.EditData;
    console.log("Edit user id is:", user);
    useEffect(()=>{
        setShowNotification(true);

         },[showNotification])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("details", name, bio, skill);
        const formData = new FormData();
        formData.append("name", name);
        formData.append("bio", bio);
        formData.append("skill", skill);
        formData.append("dob", dob);
        formData.append("address", address);
        formData.append("exp", exp);
        formData.append("id", user);
        console.log("form data is:", formData);
        const id = user;
        const data = { name, bio, skill, dob, exp, user, address, id };

        try {
                  
  
            const response = await fetch(`${backend_url}/edit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // Explicitly set header
                body: JSON.stringify(data),
            });
            const Data = await response.json();
   
 
            if (Data.message) {
                setNotificationType("success");
                setNotificationMessage("Saved successfully!");
                setShowNotification(true)
               // navigate("/login");

            } else {
                setNotificationType("error");
                setNotificationMessage("Data Not Saved!");
                setShowNotification(true)
            }
        } catch (err) {
            setNotificationType("error");
            setNotificationMessage("Something went worng!");
            setShowNotification(true)
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
            {showNotification && <Notification message={notificationMessage} type={notificationType}/>}
                <Col xs={12} md={8} lg={6}>
                    <h1 className="text-center my-4">Edit Your Details</h1>
                    <Form onSubmit={(event) => { handleSubmit(event) }}>
                        <Form.Group className="mb-3" controlId="formName">
                    
               <Form.Label>Name</Form.Label>
                       <Form.Control type="text" placeholder="Enter Your Name" onChange={(event) => { setName(event.target.value) }} />
                        </Form.Group>
            <Form.Group className="mb-3" controlId="formBio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control type="text" placeholder="Fill Bio" onChange={(event) => setBio(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formSkill">
                            <Form.Label>Skill</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Skills" onChange={(event) => { setSkill(event.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Address" onChange={(event) => { setAddress(event.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formExp">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Experience" onChange={(event) => { setExp(event.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDob">
                            <Form.Label>DOB</Form.Label>
                            <Form.Control type="date" placeholder="Enter Date of Birth" onChange={(event) => setDob(event.target.value)} />
                        </Form.Group>
                        <Button variant="dark" type="submit" className="w-100">
                            Submit
                        </Button>
                     
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Edit;
