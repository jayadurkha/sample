import React, { useState } from "react";

export default function Themecolor() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        
      }}
    >
      <center>
        <button style={{background: dark ? "black" : "white", color: dark ? "white" : "black"}} onClick={() => setDark(!dark)}>
        Change Theme
      </button></center>
 <h2>Theme Color</h2>
 
 <p>Theme colors are essential in design and branding, influencing emotions and perceptions. Here are some key points about theme color</p>
    </div>
  );
}

