import React, { useEffect, useState } from "react";

const Crud = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [editid, setEditid] = useState(null);

  const api_url = "https://69870d4c8bacd1d773ec6928.mockapi.io/user";

  const fetchUser = async () => {
    const res = await fetch(api_url);
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // SUBMIT (to submit data)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const obj = { username, email, password };

    try {
      if (editid) {
        // UPDATE 
        await fetch(`${api_url}/${editid}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        setEditid(null);
        alert("Data Updated");
      } else {
        // CREATE
        await fetch(api_url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        alert("Data Uploaded");
      }

      setUsername("");
      setEmail("");
      setPassword("");
      fetchUser();
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT 
  const handleEdit = (item) => {
    setUsername(item.username);
    setEmail(item.email);
    setPassword(item.password);
    setEditid(item.id);
  };

  //  DELETE
  const deleteData = async (id) => {
    await fetch(`${api_url}/${id}`, {
      method: "DELETE",
    });
    alert("Data Deleted");
    fetchUser();
  };

  return (
    <div className="container mt-4">
      <h2>INFOMATION</h2>

      <form onSubmit={handleSubmit} >
        <div>
          <label>Username :</label>{" "}
          <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Email :</label>{" "}
          <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <br/>
        <div>
          <label>Password :</label>{" "}
          <input type="text" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div> <br/>

        <button type="submit">submit</button>
      </form>

      <br />

      <table className='table'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>{" "}
                <button onClick={() => deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
