import React from 'react'
const List = () => {
    const product=[{
        id:1,
        title:"XIAOMI 14 Civi Matcha Green",
        img:"https://m.media-amazon.com/images/I/81LBrER2mkL._SX679_.jpg",
        price:40000,
        des:"Leica 50MP Triple camera setup to capture every moment in great detail."
    },
{
        id:2,
        title:"XIAOMI 14 Civi Matcha Green",
        img:"https://m.media-amazon.com/images/I/51LiF47dsKL._AC_UF480,480_SR480,480_.jpg",
        price:40000,
        des:"Leica 50MP Triple camera setup to capture every moment in great detail."
    },
{
        id:3,
        title:"XIAOMI 14 Civi Matcha Green",
        img:"https://m.media-amazon.com/images/I/61qKkGW41SL._AC_UF480,480_SR480,480_.jpg",
        price:40000,
        des:"Leica 50MP Triple camera setup to capture every moment in great detail."
    },
{
        id:4,
        title:"XIAOMI 14 Civi Matcha Green",
        img:"https://m.media-amazon.com/images/I/81FhRGs5+ML._AC_UF480,480_SR480,480_.jpg",
        price:40000,
        des:"Leica 50MP Triple camera setup to capture every moment in great detail."
    },
    {
        id:5,
        title:"XIAOMI 14 Civi Matcha Green",
        img:"https://images-eu.ssl-images-amazon.com/images/I/610ELrtuHEL._AC_UL330_SR330,330_.jpg",
        price:40000,
        des:"Leica 50MP Triple camera setup to capture every moment in great detail."
    },
    {
        id:6,
        title:"XIAOMI 14 Civi Matcha Green",
        img:"https://m.media-amazon.com/images/I/81LBrER2mkL._SX679_.jpg",
        price:40000,
        des:"Leica 50MP Triple camera setup to capture every moment in great detail."
    },
]

  return (
    <div>
      

      <section>
        <div className='row'>
        {product.map((item)=>(
            <div className='col-lg-4' key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.img} alt='phone' width={100}/>
                <h1>₹{item.price}</h1>
                <p>{item.des}</p>
                <button>Add to cart</button>
            </div>
        ))}
        </div>
      </section>
    </div>
  )
}

export default List
