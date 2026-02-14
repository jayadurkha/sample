import React, { useEffect, useState } from 'react'
const Crud = () => {
    const[Name,setName] = useState("")
    const[Gender,setGender]= useState("")
    const[Address,setAddress] = useState("")
    const[Gmail,setGmail] = useState("")
    const[loanAmount,setloanAmount] = useState("")
    const[user, setUser] = useState([])
    const api_url="https://69870d4c8bacd1d773ec6928.mockapi.io/get"

const handleSubmit = (e) =>{
     e.preventDefault()

    if(!Name || !Gender || !Address|| !Gmail || !loanAmount){
    alert("Fill the feilds")
    return
        }
        const obj={Name, Gender, Address,Gmail, loanAmount}

        fetch(api_url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        alert("data uploaded")
        setName("")
        setGender("")
        setAddress("")
        setGmail("")
        setloanAmount("")
    }

    const fetchUser= async()=>{
      const res = await fetch(api_url)
      const data= await res.json()
      setUser(data)
    }

    useEffect(()=>{
      fetchUser()
    },[])
  return (
    <div>
        <center><h1>Loan Details</h1>
      <form onSubmit={handleSubmit}>
        <label>Name   :</label>
        <input type='text' placeholder='Enter Name' value={Name} onChange={(e)=>setName(e.target.value)}></input><br/><br/>
        <label>Gender   :</label>
        <input type='text' placeholder='Enter Gender'value={Gender} onChange={(e)=>setGender(e.target.value)}></input><br/><br/>
        <label>Address    :</label>
        <input type='text' placeholder='Enter Address' value={Address} onChange={(e)=>setAddress(e.target.value)}></input><br/><br/>
        <label>Gmail    :</label>
        <input type='text' placeholder='Enter Gmail' value={Gmail} onChange={(e)=>setGmail(e.target.value)}></input><br/><br/>
        <label>loanAmount  :</label>
        <input type='text' placeholder='Enter loanAmount' value={loanAmount} onChange={(e)=>setloanAmount(e.target.value)}></input><br/><br/>
        <button>submit</button>
      </form></center>

      <br></br><br></br>
      <table className='table'>
        <thead>
          <th>Name</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Gmail</th>
          <th>loanAmount</th>
          <th>Action</th>
        </thead>
        <tbody>
          {user.map((item)=>(
            <tr>
              <td>{item.Name}</td>
              <td>{item.Gender}</td>
              <td>{item.Address}</td>
              <td>{item.Gmail}</td>
              <td>{item.loanAmount}</td>

              <td><button>edit</button> <button>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Crud