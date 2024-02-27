"use client"
import { useCart } from "../../context/cartProvider";
import { useState } from "react";
import Delivery from './delivery'
import TakeAway from './takeAway'
import SelectSucursal from '@/app/shipping/select'



function Shipping() {
    const { cart, totalCost } = useCart();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };


    return (
        <>
            <div className="flex flex-col items-center justify-center gap-y-4">

                <h1 className="text-center text-5xl pt-3">Order page</h1>
                <h2 className="text-center">Branches with Delivery</h2>
                <SelectSucursal />

                <div className="text-center text-xl font-bold">Your cart</div>
                {cart.length > 0 ? (
                    <ul className="lg:w-96 lg:h-30 overflow-scroll bg-slate-50">
                        {cart.map((item, index) => (
                            <li key={index} className="text-center py-3">
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)} -{" "}
                                {item.quantity} x ${item.price}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="">No items in cart.</p>
                )}
                <p className="text-xl">Total Cost: ${totalCost}</p>
                <h2 className="text-center text-yellow-800">WE WILL TAKE IT TO YOU</h2>
                <div className="flex items-center gap-x-60">
                    <button
                        onClick={() => handleOptionSelect('TakeAway')}
                        className={`text-center text-xl bg-gray-400 hover:bg-gray-700 py-2 px-1 rounded-md  text-white ${selectedOption === 'TakeAway' ? 'bg-gray-700' : ''
                            }`}
                    >
                        Take away
                    </button>
                    <button
                        onClick={() => handleOptionSelect('Delivery')}
                        className={`text-center text-xl bg-gray-400 hover:bg-gray-700  py-2 px-1 rounded-md text-white ${selectedOption === 'Delivery' ? 'bg-gray-700' : ''
                            }`}
                    >
                        Delivery
                    </button>
                </div>
            </div>
            <div className="float-left px-56">
            {selectedOption === 'TakeAway' && <TakeAway />}
            </div>
           <div className="float-right px-56">
              {selectedOption === 'Delivery' && <Delivery />}
              </div>
          
          


        </>)


}

export default Shipping