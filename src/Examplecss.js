              // external css
import './styweb.css'          

function Examplecss() {
  
              // internal css
  const sty={
    color:"red",
    backgroundColor:"black"
  }

  
  return (

<div>
<h1>ONLINE SHOPPING</h1>

               {/* inline css */}

<h3 style={{color:"red"}}>hello</h3>                         

               {/* internal css */}

<h4 style={sty}>welcome</h4>

<h5>knuh</h5>


</div>
)}

export default Examplecss