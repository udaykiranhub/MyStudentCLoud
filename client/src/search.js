import React from "react";
import { useEffect,useState } from "react";

import Modal from 'react-bootstrap/Modal';

import { backend_url } from "./path";
import { Button } from "react-bootstrap";

import SearchModal from "./serachmodal";

import ReactSearchBox from "react-search-box";
import { Card, Row, Col } from "react-bootstrap";
function Search(){
    const [show, setShow] = useState(false);
    const [data1,setData1]=useState([]);

    const [searchValue, setSearchValue] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

const [data,setData]=useState([]);
useEffect( ()=>{

async function get(){
    try{
        var response=await fetch(`${backend_url}/search`,
            {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
    
            }
        )

        const res=await response.json();
        if(!res.message){
            alert("No Data Found!");
        }
        else{
            console.log(" search Data is:"+res.message);
        //    setData(res.message);
        setData1(res.message);
            const formattedData = res.message.map((item, index) => ({
                key: index.toString(),
                value: item.name,
              }));
              
              setData(formattedData);
              
        }
    }
    catch(err){
        alert("something went worng!");
        console.log("Error in the search data !"+err);
    }
}

get();
},[])

//searching function 

const handleSearch = () => {
    const filtered = data1.filter(user =>
      user.name.toLowerCase().includes(searchValue.trim().toLowerCase())
    );
    setFilteredUsers(filtered);
  };

const handleSelect = (record) => {
  

    setSearchValue(record.value);
  
  };


return (
    <>
    <br/>
    <br/>
     <center>
<div>
      <ReactSearchBox
        placeholder="Search..."
        value={searchValue}
        data={data}
        callback={handleSelect}
        onChange={setSearchValue} // Keep the input state in sync with user typing
      />

<Button onClick={handleSearch}>Search</Button>
{filteredUsers.length > 0 ? (
            <Row>
              {filteredUsers.map((user, index) => (
                <Col key={index} sm={12} md={6} lg={4}>
                  <Card className="mb-4">
                    <Card.Body>
            
                    <Card.Img variant="top" src={user.image} alt={`${user.name}'s profile`} />
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {user.bio}
                      </Card.Subtitle>
                      <Card.Text>
                        <strong>Skills:</strong> {user.skills}<br />
                        <strong>DOB:</strong> {user.dob}<br />
                        <strong>Experience:</strong> {user.exp} years<br />
                        <strong>Address:</strong> {user.address}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>No users found</p>
          )}
     
        </div>
      </center>
    </>
  );
}

export default Search;