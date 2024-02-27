"use client"
import { useState } from "react"
import { useCart } from "@/context/cartProvider"


const items = [{
    id: 1,
    name: "Brownie",
    img: "/brownie.png",
    price: 2.99,
    soldOut: false,
    desription: "Brownie"
},
{
    id: 2,
    name: "Cheesecake fruit",
    img: "/cheesecake-fruit.png",
    price: 12,
    soldOut: false,
    description: "Cheesecake fruit"
}, {
    id: 3,
    name: "Cheesecake lemon",
    price: 23,
    soldOut: false,
    img: "/cheesecake.png",
    description: "Cheesecake lemon"
}, {
    id: 4,
    name: "Cookies",
    img: "/cookies.png",
    price: 3,
    soldOut: true,
    description: "Cookies"
},
{
    id: 5,
    name: "Lemon pie",
    img: "/lemon-pie.png",
    price: 3,
    soldOut: false,
    description: "Lemon pie"
},
{
    id: 6,
    name: "Tiramisu",
    img: "/tiramisu.png",
    price: 4,
    soldOut: false,
    description: "Tiramisu"
}
]

function ForTheTea() {

    const { cart, addToCart, removeFromCart, getItemQuantity } = useCart()




    return (<>
        <h1 className="text-center text-5xl py-10">For the tea</h1>
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
    </>)
}

export default ForTheTea