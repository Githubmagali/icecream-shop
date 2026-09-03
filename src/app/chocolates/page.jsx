"use client"
import { useCart } from "@/context/cartProvider"
import { chocolates } from "@/assets/offices"

function Chocolates() {
    const { addToCart, removeFromCart, getItemQuantity } = useCart()

    return (
        <>
            <h1 className="text-center  text-3xl lg:text-5xl py-10 text-title">Chocolates</h1>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 text-center px-6 lg:px-20 max-w-6xl">
                    {chocolates.map((item, index) => (
                        <div key={item.id ?? index} className="flex flex-col items-center">
                            <img
                                src={item.img}
                                alt={item.name}
                                className={`w-full aspect-square object-cover rounded-md ${item.soldOut ? "filter grayscale opacity-80" : ""}`}
                            />
                            <p className="text-green-800 text-xl mt-2 leading-tight">{item.name}</p>
                            <p className="text-xl">$ {item.price}</p>

                            {getItemQuantity(item.id) > 0 ? (
                                <div className="flex gap-x-3 items-center justify-center mt-1">
                                    <button className="bg-gray-400 hover:bg-gray-600 px-2 rounded-full" onClick={() => addToCart(item)}>+</button>
                                    <p className="text-xl">{getItemQuantity(item.id)}</p>
                                    <button className="bg-gray-200 hover:bg-gray-300 px-2 rounded-full" onClick={() => removeFromCart(item.id)}>-</button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => addToCart(item)}
                                    className={`mt-1 lg:py-1 bg-gray-200 px-1 hover:bg-gray-300 rounded-md ${item.soldOut ? "hidden" : ""}`}
                                >
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Chocolates