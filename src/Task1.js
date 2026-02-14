import React, { useState } from "react";

export default function Task1() {
  const messages = ["Welcome", "React learning", "let's learn"];
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % messages.length);
  }

  return (
    <div style={{ marginTop: "50px" ,background:"black",color:"white"}}>
     <center> <h1>{messages[index]}</h1> 
      <button onClick={handleClick}>Click Me</button> </center>
    </div>
  );
}
