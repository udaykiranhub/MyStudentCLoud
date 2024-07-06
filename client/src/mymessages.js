import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import  {Trash} from "react-bootstrap-icons";
import ColorSpinner from "./colorSpinner";
import { backend_url } from "./path";

function Mymessages({ data }) {
  const [Messages, setMessages] = useState([]);
  const [id, setId] = useState(null);
  const [load,setLoad]=useState(false);

  const [delmess,setDelmess]=useState(false);

  useEffect(() => {
    // Setting id to the passed data prop
    setId(data);
  }, [data]);

  useEffect(() => {
    if (id === null) return;

    const getMessages = async () => {
      try {

        console.log("messages id is:" + id);
        
        const res = await fetch(`${backend_url}/mymessages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        });

        const responseData = await res.json();
console.log("response Data is:"+JSON.stringify(responseData))
        if (!responseData.message) {
          alert("No Messages!");
        } else {
            const allMessages = responseData.message.map(msgObj => msgObj.messages).flat();
            setMessages(allMessages);
            // setMessages(responseData.message);
          console.log("data from mymessages:"+responseData)
        }
      } catch (err) {
        alert("Something went wrong!");
      }
    };

    getMessages();
  }, [id]);

// deleting a message from the user account
  async function Delmess(id,message){
       try{
setLoad(true)
        var res=await fetch(`${backend_url}/deletemessage`,{
            method:"delete",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id,message})

        })
        if(res.message){
            alert("sucessfully message deleted!");
        }
    
setLoad(false)
}

 catch(err){
    setLoad(false)
alert("something went wrong in deletemessage!"+err);
       }
  }




  return (
    <>
  <div className="messaging-box">
        <Card>
          <Card.Body>
            <Card.Title>Messages</Card.Title>
            {load && <ColorSpinner/>}
            <ListGroup variant="flush">
              {Messages.map((msg, idx) => (
                <ListGroup.Item key={idx}>{msg}  <span></span>
   
                <Button variant="dark"  size="sm" onClick={()=>{Delmess(id,msg)}}>
            <Trash/>
                </Button>
                
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
        </div>
    </>
  );
}

export default Mymessages;
