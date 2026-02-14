import React, { useState } from "react";

export default function Exampleusestage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const myName = (e) => {
    setName(e.target.value);
  };

  const myAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || age === "") {
      alert("Fill the blank");
    } else {
      alert("Submitted");
      console.log("Name:", name, "Age:", age);
    }
  };

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={myName}
        />

        <br />
        <br />

        <label>Age</label>
        <br />
        <input
          type="number"
          value={age}
          onChange={myAge}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}





// project topices are:

//theme change
//check box=link not unlike
//employee validation