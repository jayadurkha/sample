import React, { useState } from 'react'

export default function UseState() {
    // const a=10;
    // console.log(a);//10
    // a=20;
    // console.log(a);//8

//    const [variable, method]  = useState(initial )

const [num,setNum]=useState(100)
    
    function myClick1(){
        setNum(num+1)
    }

    function myClick2(){
        setNum(num-1)
    }
  return (
    <div>
      {/* //function - hooks - useState() 
      // state managing */}
      <h1>Number:{num}</h1>

      <button onClick={myClick1}>increment</button>
      <button onClick={myClick2}>decrement</button>
    </div>
  )
}
