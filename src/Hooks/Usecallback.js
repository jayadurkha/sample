import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[count, setCount] = useState(1)

    const handleSubmit = useCallback(()=>{
        setCount(count+2)
    })
  return (
    <div>
      <h1 style={{margin:"100px"}}>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Add</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Usecallback

//memorize function

