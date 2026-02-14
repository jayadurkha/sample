import React from "react";
import dress1 from "./image/dress.jpg";
import dress2 from "./image/dres1.jpg";

function Exampledress() {
  const styles = {
    page: {
      display: "flex",
      gap: "40px",
      padding: "40px",
      fontFamily: "Arial",
      alignItems: "flex-start",
     
    },
    imageBox: {
      display: "flex",
      gap: "20px"
    },
    Img: {
      width: "350px",
      borderRadius: "6px"
    },

    price: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    cart: {
      padding: "12px 20px",
      background: "orange",
      border: "none",
      cursor: "pointer",
      marginRight: "10px"
    },
    buy: {
      padding: "12px 20px",
      background: "red",
      color: "white",
      border: "none",
      cursor: "pointer"
    },
  
  };

  return (
    <div style={styles.page}>

    
      <div style={styles.imageBox}>
        <img style={styles.Img} src={dress1}  alt="dress"/>
        <img style={styles.Img} src={dress2} alt="dress"/>
      </div>

    
      <div style={styles.textBox}>
        <h2>Ivory Bloom Midi Dress</h2>

        <div style={styles.price}>
          <h3>₹355</h3>
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ₹1,963
          </span>
        </div>

        <p style={{ color: "green", fontWeight: "bold" }}>81% OFF</p>

        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>{" "}
          4.0 | 8,051 ratings</p>

        <h4>Size</h4>
        <div style={{ display: "flex", gap: "10px",}}>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>

        <p>
          A graceful floral midi dress with a soft, flowy fit that blends comfort
          and elegance for everyday wear.
        </p>

        <button style={styles.cart}>ADD TO CART</button>
        <button style={styles.buy}>BUY NOW</button>
<br/><br/>
        <h4 >Available Offers</h4>
        <ul>
          <li>₹50 off on Flipkart Bajaj Finserv Insta EMI Card (Min ₹2,500)</li>
          <li>10% off up to ₹750 on HDFC Bank Credit Card (Min ₹1,999)</li>
          <li>5% cashback on Axis Bank Flipkart Debit Card (Up to ₹750)</li>
        </ul>
      </div>

    </div>
  );
}

export default Exampledress;
