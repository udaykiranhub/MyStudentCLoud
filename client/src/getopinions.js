import { useEffect,useState } from "react";

import {Container,Row,Col} from "react-bootstrap";

import ColorSpinner from "./colorSpinner";
import { Card, ListGroup } from 'react-bootstrap'; 
import {backend_url} from "./path";
function Getopinions(){

 const [Messages,setMessages]=useState([]);
 const [load ,setLoad]=useState(false);
 useEffect(()=>{
    async function get(){
        setLoad(true)
        var response=await fetch(`${backend_url}/getopinions`,{
            method:"get"
          

        }

        )


    var data=await response.json();
    console.log("getopinion data is:"+data);
    console.log("getopinion data is: " + JSON.stringify(data)); 
    if(!data.message){
        setLoad(false)
        //alert("No messages!");
    }
    else{
        setLoad(false)
       // alert("Messages get sucessfully!")
        setMessages(data.message);
    }
    }


try{
    console.log("mesages are:"+Messages);
    get()
}

catch(err){
    setLoad(false)
    alert("Try after some time!");
}

 } ,[])

    return(
        <>
<Container>

<center>
  <h3>Group Chat</h3>
  {load && <ColorSpinner/>}
  </center>
        <Row>
        <Col>
        {Messages && Messages.length > 0 ? (
    
    Messages.map((user, index) => (
// setting user Messages with the last message from the suer
        <Card key={index} className="mb-3">
        <Card.Body>
          <div className="d-flex align-items-center">
            <img src={user.profile} alt="profile" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
            <div>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text><strong>Last Message:</strong> {user.messages[user.messages.length - 1]}</Card.Text>
            </div>
          </div>
        </Card.Body>
   
      </Card>
    ))
  ) : (
    <p>No Data Found!</p>
  )
}



        </Col>
        </Row>
</Container>
        

    </>
    )
}

export default Getopinions;