"use client"
import { useState } from 'react';
import { iceCreams as allIceCreams } from "@/assets/iceCream";
import { quantityIceCream } from '@/assets/slider.json'
import { useCart } from "@/context/cartProvider"
import Link from 'next/link';

function One() {
  
    const [selectedIceCreams, setSelectedIceCreams] = useState([]);

    const {addToCart, removeFromCart, getItemQuantity } = useCart()

    const iceCream = quantityIceCream[0]

    const handleIceCreamSelection = (id) => {
        if (selectedIceCreams.includes(id)) {
            // Si ya está seleccionado, lo quitamos de la lista
            setSelectedIceCreams(selectedIceCreams.filter((selectedId) => selectedId !== id));
        } else {
            // Si no está seleccionado y no hemos alcanzado el límite de 3, lo agregamos
            if (selectedIceCreams.length < 4) {
                setSelectedIceCreams([...selectedIceCreams, id]);
            }
        }
    };



    return (<>
       <Link href="/iceCream" className='p-5 py-10 text-gray-500 underline decoration-1'>Go back</Link>
        <div className="flex  pl-6 pt-5 ">
            <img src="/swiper-icecream.jpg" className="w-1/2 h-1/2" />
            <div className="flex flex-col pt-8 ">
               
                     <h1 className="text-xl pl-4 font-bold pl-8">{iceCream.name}</h1>
                     <p className="text-center pt-3 pb-2">${iceCream.price}</p>
     
                     <div className="flex items-center justify-center gap-x-8 pb-4 ">
                         <button className="px-1 border border-gray-400"onClick={() => addToCart(iceCream)}>+</button>
                         <p className="text-xs text-center">{getItemQuantity(iceCream.id)}</p>
                         <button className="px-1 border border-gray-400"onClick={() => removeFromCart(iceCream.id)}>-</button>
                     </div>

                {allIceCreams.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-2 pl-5">
                        <input
                            type="checkbox"
                            className="text-gray-400"
                            checked={selectedIceCreams.includes(item.id)}
                            onChange={() => handleIceCreamSelection(item.id)} />
                        <p className="text-gray-400">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
  </>  )
}

export default One