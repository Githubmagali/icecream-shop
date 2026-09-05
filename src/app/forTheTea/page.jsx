"use client"
import { useCart } from "@/context/cartProvider"
import { items } from "@/assets/offices"

function ForTheTea() {
    const { addToCart, removeFromCart, getItemQuantity } = useCart()

    return (
        <>
            <h1 className="text-center text-3xl lg:text-5xl py-10 text-title">FOR THE TEA</h1>

            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20 max-w-6xl">
                    {items.map((item) => {
                        const quantity = getItemQuantity(item.id)

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="relative">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className={`w-full aspect-square object-cover ${item.soldOut ? "grayscale opacity-70" : ""}`}
                                    />
                                    {item.soldOut && (
                                        <span className="absolute top-3 right-3 bg-gray-800 text-white text-xs uppercase tracking-wide px-2 py-1 rounded">
                                            Sold out
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-col flex-1 p-4">
                                    <div className="flex items-baseline justify-between gap-2">
                                        <h3 className="text-product text-lg leading-tight">{item.name}</h3>
                                        <p className="text-lg whitespace-nowrap">$ {item.price}</p>
                                    </div>

                                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto pt-4">
                                        {item.soldOut ? (
                                            <p className="text-sm text-gray-400 text-center">
                                                Currently unavailable
                                            </p>
                                        ) : quantity > 0 ? (
                                            <div className="flex gap-x-3 items-center justify-center">
                                                <button
                                                    aria-label={`Remove one ${item.name}`}
                                                    className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    −
                                                </button>
                                                <p className="text-lg w-6 text-center">{quantity}</p>
                                                <button
                                                    aria-label={`Add one ${item.name}`}
                                                    className="bg-gray-400 hover:bg-gray-600 text-white w-8 h-8 rounded-full"
                                                    onClick={() => addToCart(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                                            >
                                                Add to Cart
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ForTheTea