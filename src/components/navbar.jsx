"use client"
import { useState } from "react";
import Link from "next/link"
import { useCart } from "@/context/cartProvider"

function Navbar() {
    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

      // Estado para manejar la visibilidad del menú en pantallas pequeñas
  const [menuVisible, setMenuVisible] = useState(false);


    return (<>
        <div className="flex justify-between lg:py-3 lg:px-8 w-full shadow-2xl shadow-slate-100">
            <Link href="/" className="text-3xl pt-4 text-yellow-800">Ice cream</Link>
            <div className="hidden sm:flex flex gap-x-4 py-5">
                <Link href="/contact" className="hover:text-yellow-800">Contact </Link>
                <Link href="/branchOffices" className="hover:text-yellow-800">Branch offices</Link>
                <Link href="/iceCream" className="hover:text-yellow-800">Ice cream</Link>
                <Link href="/chocolates" className="hover:text-yellow-800">Chocolates</Link>
                <Link href="/forTheTea" className="hover:text-yellow-800">For the tea</Link>
                <Link href="/shipping" className="px-3"> <i className='bx bxs-cart text-4xl'></i>{totalItems}</Link>

            </div>

        </div>
         {/* Icono de hamburguesa para pantallas pequeñas */ }
    <div
        className="block sm:hidden cursor-pointer text-3xl text-yellow-800 top-0 right-0"
        onClick={() => setMenuVisible(!menuVisible)}
    >
        &#9776;
    </div>
    

        {/* Menú para pantallas pequeñas */ }
    { menuVisible && (
            <div className="flex flex-col sm:flex-row gap-y-4 py-5 justify-end">
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
                <Link href="/shipping" className="px-3">
                    <i className="bx bxs-cart text-xl"></i>
                    {totalItems}
                </Link>
            </div>
        )
    }
 

 </> )
}

export default Navbar