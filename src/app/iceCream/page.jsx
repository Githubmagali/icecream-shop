"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import data from "@/assets/slider.json";
import Footer from '@/components/footer';
import quantityIceCream from '@/assets/slider.json';



function IceCream() {



    const [showBuyOptions, setShowBuyOptions] = useState(false);

    const chocolateData = data.chocolate;
    const dulce = data.dulce;
    const creams = data.creams;
    const fruits = data.fruits;
    const recomends = data.recomends;
    const sweetOleasures = data.sweetOleasures;
    const clasic = data.clasic;
    const quantityIceCream = data.quantityIceCream;

    const handleBuyNowClick = () => {
        setShowBuyOptions(true);
    };




    return (<>
        <div className="flex flex-col justify-center  pt-10">
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
                    <h1 className="text-3xl font-bold text-yellow-500">Clasic</h1>
                    {clasic.map((item, index) => (
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

                            <div key={index} className="flex items-center justify-center pb-10">
                                <div className=''>
                                    <img src={item.img}
                                        className='object-cover lg:w-24 h-20'
                                    />
                                </div>
                                <div className='text-center'>
                                    <p className="text-gray-500 pl-5">{item.name}</p>
                                    <p className="text-gray-500 pb-2">${item.price}</p>

                                    <Link href={`/iceCream/[id]/page`} as={`/iceCream/${item.id}/page`} key={item.id}>
                                        <div key={index}>
                                            <h1>{item.name}</h1>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </>
                        ))}

                    </>
                )}

            </div>z

        </div>
        <Footer />

    </>)
}

export default IceCream