import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {

    const navi=useNavigate()

    function mySubmit(){
        navi("/about")

    }
  return (
    <div>
      <form action="" onSubmit={mySubmit}>
        <h1>Register</h1>

        <label htmlFor="">username</label>
        <input type="text" />
        <label htmlFor="">password</label>
            <input type="text" />
        <label htmlFor="">email</label>
            <input type="text" />

            <button type='submit'>register</button>
      </form>
    </div>
  )
}
