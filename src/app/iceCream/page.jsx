"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import data from "@/assets/slider.json"




function IceCream() {



    const [showBuyOptions, setShowBuyOptions] = useState(false);

    const chocolateData = data.chocolate;
    const dulce = data.dulce;
    const creams = data.creams;
    const fruits = data.fruits;
    const recomends = data.recomends;
    const sweetOleasures = data.sweetOleasures;
    const light = data.light;
    const quantityIceCream = data.quantityIceCream;

    const handleBuyNowClick = () => {
        setShowBuyOptions(true);
    };




    return (
        <div className="flex  justify-center h-screen pt-10">
            <div className="lg:grid lg:grid-cols-3  justify-center text-center gap-x-20">

                <div className="col-span-1  sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Chocolate</h1>
                    {chocolateData.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1  sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Dulce de leche</h1>
                    {dulce.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                    <h1 className="text-3xl font-bold text-yellow-500 pt-10">Recomends</h1>
                    {recomends.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1 sm:py-10 ">
                    <h1 className="text-3xl font-bold text-yellow-500 pt-20 ">Creams</h1>
                    {creams.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1 sm:py-10 ">
                    <h1 className="text-3xl font-bold text-yellow-500">Fruits</h1>
                    {fruits.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>

                <div className="col-span-1 sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Sweet Oleasures</h1>
                    {sweetOleasures.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-1 sm:py-10">
                    <h1 className="text-3xl font-bold text-yellow-500">Light</h1>
                    {light.map((item, index) => (
                        <p key={index}>{item.name}</p>

                    ))}
                </div>
                <div className="col-span-3 pb-7">
                    <button
                        className="bg-yellow-500 hover:bg-yellow-800 hover:text-white py-1 px-2 "
                        onClick={handleBuyNowClick}>Buy now</button>
                </div>
                {showBuyOptions && (
                    <>
                        {quantityIceCream.map((item, index) => (<>

                            <div className="flex items-center justify-center pb-10">
                                <div className=''>
                                    <img src={item.img}
                                        className='object-cover lg:w-24 h-20'
                                    />
                                </div>
                                <div className='text-center'>
                                    <p className="text-gray-500">{item.name}</p>
                                    <p className="text-gray-500 ">${item.price}</p>
                                    <Link
                                    className='bg-yellow-100 hover:bg-yellow-200 hover:text-white my-5 px-2 '
                                     href={item.href} passHref>
                                        Add cart
                                    </Link>

                                </div>
                            </div>

                        </>
                        ))}

                    </>
                )}
            </div>



        </div>
    )
}

export default IceCream