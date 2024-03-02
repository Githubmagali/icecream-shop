"use client"
import { useCart } from "@/context/cartProvider"
import { items } from '@/assets/offices'
import Footer from "@/components/footer"



function ForTheTea() {

    const { addToCart, removeFromCart, getItemQuantity } = useCart()


    return (<>
        <h1 className="text-center text-5xl py-10">For the tea</h1>
        <div className="flex flex-col items-center justify-center ">
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

                        ) : (
                            <button onClick={() => addToCart(item)}
                                className={`lg:py-1 bg-gray-200 px-1 hover:bg-gray-300 rounded-md ${item.soldOut ? "hidden" : ""}`}>Add to Cart</button>
                        )
                        }


                    </div>



                </>))}

            </div>
        </div>
       
        <Footer/>
     
    </>)
}

export default ForTheTea