"use client"
import { useState } from "react"
import { useCart } from "@/context/cartProvider"




const items = [{
    id: 1,
    name: "Chocolate 100%",
    img: "/chocolate-100.jpg",
    price: 5.99,
    soldOut: false,
    desription: "Chocolate 100%"
},
{
    id: 2,
    name: "Chocolate black and white",
    img: "/chocolate-blackandwhite.png",
    price: 12,
    soldOut: false,
    description: "Chocolate black and milk"
}, {
    id: 3,
    name: "Chocolate milk",
    price: 23,
    soldOut: false,
    img: "/chocolate-milk.jpg",
    description: "Chocolate with milk"
}, {
    id: 4,
    name: "Chocolate white",
    img: "/chocolate-white.jpg",
    price: 3,
    soldOut: true,
    description: "Chocolate white"
},
{
    id: 5,
    name: "Bombon",
    img: "/bombon-milk.jpg",
    price: 3,
    soldOut: false,
    description: "Bombon milk"
},
{
    id:6,
    name:"Bombon mix",
    img:"/swiper-bombon.jpg",
    price:4,
    soldOut: false,
    description: "Bombon mix"
}
]

function Chocolates() {

    const { cart, addToCart, removeFromCart, getItemQuantity } = useCart()




    return (<>
                <h1 className="text-center text-5xl py-10">Chocolates</h1>
        <div className="flex items-center justify-center ">
            <div className="grid sm:gap-y-5 lg:grid-cols-8 text-center lg:px-20">
                {items.map((item, index) => (<>
                    <img src={item.img}
                        alt={item.name}
                        key={index}
                        className={`w-20 h-24 object-cover rounded-md lg:col-span-1 ${item.soldOut ? "filter grayscale opacity-80 text-center" : ""}`}
                    />
                    <div className='lg:col-span-1' >
                        <p className='text-center text-green-800'>{item.name}</p>
                        <p className='text-xs py-2'> $ {item.price}</p>
                        {getItemQuantity(item.id) > 0 ? (
                        <div className="flex gap-x-3 items-center justify-center">
                        <button className="bg-gray-200 hover:bg-gray-300 px-2 rounded-full" onClick={() => addToCart(item)}>+</button>
                        <p className="text-xs text-center">{getItemQuantity(item.id)}</p>
                        <button className="bg-gray-200 hover:bg-gray-300 px-2 rounded-full" onClick={() => removeFromCart(item.id)}>-</button>
                        </div>
                
                        ): (
                            <button  onClick={() => addToCart(item)}
                            className={`lg:py-1 bg-gray-200 px-1 hover:bg-gray-300 rounded-md ${item.soldOut ? "hidden" : ""}`}>Add to Cart</button>
                        )
                        }

                    </div>

                </>))}

            </div>
        </div>
        </>  )
}

export default Chocolates