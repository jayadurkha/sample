import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[number, setNumber] = useState(0)

    const square = useMemo(()=>{
        return number*number
    })
  return (
    <div style={{margin:"30px"}}>
      <input type='text' placeholder='enter number' value={number} onChange={(e)=>setNumber(Number(e.target.value))}></input> <br/><br/><br/>
      <h1>{square}</h1>
    </div>
  )
}

export default Usememo

//memorize state
