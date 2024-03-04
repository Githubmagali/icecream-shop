"use client"
import { useState } from "react";
import Link from "next/link"
import { useCart } from "@/context/cartProvider"
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Navbar() {
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const pathname = usePathname();

    // Estado para manejar la visibilidad del menú en pantallas pequeñas
    const [menuVisible, setMenuVisible] = useState(false);


    return (<>
        <div className="flex justify-between lg:py-3 lg:px-8 w-full shadow-2xl shadow-slate-100">
            <Link href="/" className={clsx('text-3xl pt-4 text-yellow-800',
                { 'font-bold': pathname === "/", },
            )}>Ice cream</Link>

            <div className="hidden sm:flex md:flex flex gap-x-4 py-5">
                <Link href="/contact"
                    className={`hover:text-yellow-800 ${pathname === "/contact" ? 'font-bold text-yellow-800' : ''}`}
                >Contact </Link>
                <Link href="/branchOffices"
                    className={`hover:text-yellow-800 ${pathname === "/branchOffices" ? 'font-bold text-yellow-800' : ''}`}>Branch offices</Link>
                <Link href="/iceCream"
                    className={`hover:text-yellow-800 ${pathname === "/iceCream" ? 'font-bold text-yellow-800' : ''}`}
                >Ice cream</Link>
                <Link href="/chocolates"
                    className={`hover:text-yellow-800 ${pathname === "/chocolates" ? 'font-bold text-yellow-800' : ''}`}
                >Chocolates</Link>
                <Link href="/forTheTea"
                    className={`hover:text-yellow-800 ${pathname === "/forTheTea" ? 'font-bold text-yellow-800' : ''}`}
                >For the tea</Link>
                <Link href="/shipping"
                    className={`hover:text-yellow-800 ${pathname === "/shipping" ? 'font-bold text-yellow-800' : ''}`}> <i className='bx bxs-cart text-4xl'></i>{totalItems}</Link>



            </div>
            {/* Icono de hamburguesa para pantallas pequeñas */}
            <div
                className="sm:hidden md:hidden cursor-pointer text-3xl text-yellow-800 pr-9"
                onClick={() => setMenuVisible(!menuVisible)}
            >
                 
                &#9776;
            </div>
        </div>

        {/* Menú para pantallas pequeñas */}
        {menuVisible && (
            <div className="flex flex-col sm:flex-row md:flex-grow gap-y-4 pl-3">
                <Link href="/contact" className="hover:text-yellow-800">
                    Contact
                </Link>
                <Link href="/branchOffices" className="hover:text-yellow-800">
                    Branch offices
                </Link>
                <Link href="/iceCream" className="hover:text-yellow-800">
                    Ice cream
                </Link>
                <Link href="/chocolates" className="hover:text-yellow-800">
                    Chocolates
                </Link>
                <Link href="/forTheTea" className="hover:text-yellow-800">
                    For the tea
                </Link>
            </div>
        )
        }


    </>)
}

export default Navbar