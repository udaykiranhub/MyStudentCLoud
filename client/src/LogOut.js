import React, { useEffect, useState } from "react";
import { useLocation ,useNavigate} from "react-router-dom";

import { backend_url } from "./path";
import Notification from "./notification";
function LogOut() {
  const location = useLocation();
  const [showNotification,setShowNotification]=useState(true);
  const userId = location.state?.userId;
const navigate=useNavigate();
  


  useEffect(() => {
    async function logout() {
    
      try {
     
        const req = await fetch(`${backend_url}/logout`, {
          method: "POST",
          body:JSON.stringify({userId}),
          headers: { "Content-Type": "application/json" }
        });
    
        const res = await req.json();
     
  
        if (res.message) {

          alert("Log Out successful!");
          setShowNotification(false);
         navigate("/");

        } 
        else {
          alert("Failed to log out!");
          navigate("/login");
     
      
        }
      } 
      catch (error) {
        console.error("Logout error:", error);
        alert("An error occurred during logout. Please try again.");
      }
    }

    logout();
  }, []); // Empty dependency array to run only once after mount

  return (
    <center>
      <h4>Log Out Sucessfully!</h4>
      
      {showNotification && <Notification message="Sucessfully log out!" type="error" />}
    </center>
  );
}

export default LogOut;
