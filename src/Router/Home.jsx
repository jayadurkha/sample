import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>home</h1>


      <span><Link to={"login"}>Login</Link></span>
      <span style={{marginLeft:"300px"}}><Link to={"register"}>register</Link></span>

      <Outlet/>
    </div>
  )
}
