// import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Home from "./Home";
// import About from "./About";
// import Career from "./Career";
// import Contact from "./Contact";

// export default function App() {

//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     backgroundColor: "#222",
//     padding: "12px 20px",
//     color:"white"
//   };

//   const ulStyle = {
//     listStyle: "none",
//     display: "flex",
//     gap: "20px",
//     margin: 0
//   };

//   const linkStyle = {
//     color: "white",
//     textDecoration: "none",
//     fontWeight: "500"
//   };

//   return (
//     <BrowserRouter>
//       <nav style={navStyle}>
//         <h2>SkillNest</h2>

//         <ul style={ulStyle}>
//           <li><Link to="/" style={linkStyle}>Home</Link></li>
//           <li><Link to="/about" style={linkStyle}>About</Link></li>
//           <li><Link to="/career" style={linkStyle}>Career</Link></li>
//           <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/career" element={<Career />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
