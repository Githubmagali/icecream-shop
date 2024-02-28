"use client"
import { useState } from 'react';
import { location } from '@/assets/offices'

function BranchOffices() {
    const [index, setIndex] = useState(0);
    const hasNext = index < location.length - 1;
    const hasBefore = index > location.length + 1;

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    function handleClick() {
        if (hasBefore) {
            setIndex(index - 1);
        } else {
            setIndex(0);
        }
    }


    let local = location[index];
    return (
        <>
            <div className='flex flex-col items-center justify-center pb-10 px-20'>
                    <h1 className="text-center text-4xl text-yellow-600 pt-2 ">{local.name} </h1>
                    <div className='flex space-x-64 '>
                        <button onClick={handleClick} className='py-2 px-2 bg-gray-200 hover:bg-gray-400'>
                            <i class='bx bx-left-arrow' ></i>
                        </button>
                        <button onClick={handleNextClick} className='py-2 px-2 bg-gray-300 hover:bg-gray-600'>
                            <i class='bx bx-right-arrow'></i>
                        </button>
                    </div>
                    <h2 className='text-xl pb-3'> {local.address}</h2>
                    <p className='text-sm '><i class='bx bx-hourglass text-gray-400 pl-2'></i>{local.hor}</p>
                    <p className='text-sm'><i class='bx bxs-phone-call text-gray-400 pl-2' ></i>{local.num}</p>
                    <iframe
                        src={local.url}
                        className="w-full h-96"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
            </div>
        </>
    );
}

export default BranchOffices