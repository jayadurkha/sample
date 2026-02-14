import nature from "./image/nature.jpg";

function ExampleWebpage() {
const sty={
    backgroundColor:"black",
    color:"white"
}

const h1={
    color:"Blue"
}


  return (
    <div>
      <h1 style={sty}>Nature</h1>
      <center><img style={{height:"300px",width:"300px"}} src={nature}/>
      <p><i><b>Nature is painting for us, day after day, pictures of infinite beauty.</b></i></p></center>

      <h2 style={h1} > Importance of Nature</h2>
      <p sty>Nature maintains balance in the environment. Trees absorb carbon dioxide and release oxygen. Rivers, oceans, and rain support all living beings.
      </p>

    

      <h2 style={h1}> Protect Nature </h2>
      <p>
        We must protect nature by planting trees, saving water,
        reducing pollution, and using eco-friendly products.
      </p>

      
        <p style={{color:"pink"}}>“In every walk with nature, one receives far more than he seeks.”</p>
    

      <img style={{ width: "350px", height: "350p"}} src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"/>

    </div>
  );
}

export default ExampleWebpage;
