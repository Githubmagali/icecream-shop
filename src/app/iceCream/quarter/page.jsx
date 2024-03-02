"use client"
import { useCart } from "@/context/cartProvider"
import { useState } from 'react';
import { iceCreams as allIceCreams } from "@/assets/iceCream";
import data from '@/assets/slider.json'
import Footer from "@/components/footer";


function Quarter() {

    const thirdIceCream = data.quantityIceCream[2];
    const [selectedIceCreams, setSelectedIceCreams] = useState([]);
    const {addToCart, removeFromCart, getItemQuantity } = useCart()



    const handleIceCreamSelection = (id) => {
        if (selectedIceCreams.includes(id)) {
          // Si ya está seleccionado, lo quitamos de la lista
          setSelectedIceCreams(selectedIceCreams.filter((selectedId) => selectedId !== id));
        } else {
          // Si no está seleccionado y no hemos alcanzado el límite de 3, lo agregamos
          if (selectedIceCreams.length < 3) {
            setSelectedIceCreams([...selectedIceCreams, id]);
          }
        }
      };




    return (<>
        <div className="flex pl-6 ">
            <img src="/1-id.png" className="w-1/2 h-1/2" />
            <div className="flex flex-col pt-8  ">
                <h1 className="text-xl pl-4 font-bold pl-8">{thirdIceCream.name}</h1>
                <p className="text-center pt-3 pb-2">${thirdIceCream.price}</p>

                <div className="flex items-center justify-center gap-x-8 pb-4 ">
                    <button className="px-1 border border-gray-400"onClick={() => addToCart(thirdIceCream)}>+</button>
                    <p className="text-xs text-center">{getItemQuantity(thirdIceCream.id)}</p>
                    <button className="px-1 border border-gray-400"onClick={() => removeFromCart(thirdIceCream.id)}>-</button>
                </div>
                {allIceCreams.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-2 pl-5">
                         <input
                           type="checkbox"
                           className="text-gray-400"
                           checked={selectedIceCreams.includes(item.id)}
                           onChange={() => handleIceCreamSelection(item.id)}/>
                        <p className="text-gray-400">{item.name}</p>
                       
                    </div>
                ))}
            </div>
        </div>
<Footer />
        </>  )
}

export default Quarter