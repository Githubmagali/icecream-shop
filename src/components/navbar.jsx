"use client"
import Link from "next/link"

function Navbar(){
    return(
        <div className="flex justify-between lg:py-3 lg:px-8 w-full shadow-2xl shadow-slate-100">
            <Link href="/" className="text-3xl pt-4 text-yellow-800">Ice cream</Link>
            <div className="flex gap-x-4 py-5">
                <Link href="/branchOffices" className="hover:text-yellow-800">Branch offices</Link>
                <Link href="/iceCrean" className="hover:text-yellow-800">Ice cream</Link>
                <Link href="/chocolates" className="hover:text-yellow-800">Chocolates</Link>
                <Link href="/forTheTea" className="hover:text-yellow-800">For the tea</Link>
                <p className="px-3"> <i class='bx bxs-cart text-4xl'></i></p>
               
            </div>

        </div>
    )
}

export default Navbar