import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {
     const {id}=useParams()

  return (
    <div>
      <h1>contact</h1>

      <h2>userId:{id}</h2>
    </div>
  )
}
