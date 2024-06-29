import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { backend_url } from "./path";

function ChangeProfile() {
    const navigate = useNavigate();
    const location = useLocation();
    const [id, setId] = useState(location.state?.userId || "");
    const [count, setCount] = useState(0);
    const [profile, setProfile] = useState(null); // State to hold selected profile image file

    const handleProfileSubmit = (event) => {
        event.preventDefault();
        if (!profile) {
            alert("Please select a picture!");
            return;
        }
        setCount(1);

        const formData = new FormData();
        formData.append("id", id);
        formData.append("image", profile);

        console.log("Form data:", formData);

        try {
            async function change() {
                const res = await fetch(`${backend_url}/changeProfile`, {
                    method: "POST",
                    body: formData
                });

                const ans = await res.json();
                if (ans.message) {
                    alert("Changed Successfully!");
                    setCount(0);
                } else {
                    alert("Select a proper image!");
                    setCount(0);
                }
            }

            change();
        } catch (err) {
            alert("Try after some time!");
        }
    };

    const goBack = () => {
        navigate(-1); // Navigate back one step in history
    };

    return (
        <Container>
            <Row>
                <Col xs={12} sm={10} lg={12} className="text-center">
                    <h1>Change Your Profile</h1>
                    <Form onSubmit={handleProfileSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control type="file" name="image" onChange={(event) => setProfile(event.target.files[0])} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Change
                        </Button>
                    </Form>
                    <br />
                    <Button variant="secondary" onClick={goBack}>
                        Go Back
                    </Button>
                    {count === 1 && <h3>Loading...</h3>}
                </Col>
            </Row>
        </Container>
    );
}

export default ChangeProfile;
