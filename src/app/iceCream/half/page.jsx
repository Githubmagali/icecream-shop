"use client"
import { useState } from 'react';
import { iceCreams as allIceCreams } from "@/assets/iceCream";
import data from '@/assets/slider.json'

function Half() {

    const firstIceCream = data.quantityIceCream[0];
    const [selectedIceCreams, setSelectedIceCreams] = useState([]);

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


    return (
        <div className="flex pl-6 ">
            <img src="/1-id.png" className="w-1/2 h-1/2" />
            <div className="flex flex-col pt-8  ">
                <h1 className="text-xl pl-4 font-bold pl-8">{firstIceCream.name}</h1>
                <p className="text-center pt-3 pb-2">${firstIceCream.price}</p>

                <div className="flex items-center justify-center gap-x-8 pb-4 ">
                    <button className="px-1 border border-gray-400">+</button>
                    <button className="px-1 border border-gray-400">-</button>
                </div>
                {allIceCreams.map((item, index) => (
                    <div key={index} className="flex items-center gap-x-2 pl-5">
                        <input
                            type="radio"
                            className="text-gray-400"
                            checked={selectedIceCreams.includes(item.id)}
                            onChange={() => handleIceCreamSelection(item.id)}
                        />
                        <p className="text-gray-400">{item.name}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Half