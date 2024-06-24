import React from 'react';
import logo from "./studentcloud.png";

const SpacedDiv = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${logo})`, // Background image URL
      backgroundSize: "cover", // Cover the entire area
      backgroundPosition: "center", // Center the image
      width: "200px", // Example width for illustration
      height: "200px", // Example height for illustration
      borderRadius: "10px", // Rounded corners for a more modern look
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Shadow for depth
      }}>
      {/* Content inside the div */}
    </div>
  );
}

export default SpacedDiv;

