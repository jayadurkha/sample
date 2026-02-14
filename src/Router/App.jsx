import React from 'react'
import { BrowserRouter , Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Career from './Career';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';

export default function App() {
  return (
    <div>
      {/* <h1>app</h1> */}
      {/* java script xml - html embedded */}


      <BrowserRouter>
      <ul>
        <li>      <Link to={"/"}>Home </Link></li>
        <li>      <Link to={"/about"}> About</Link></li>
        <li>      <Link to={"/career"}>Career </Link></li>
        <li>      <Link to={"/contact"}>Contact </Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact/:id' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
