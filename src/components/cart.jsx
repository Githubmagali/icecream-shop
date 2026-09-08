"use client"
import { useCart } from '@/context/cartProvider';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function NavbarCart() {
    const { cart, totalCost } = useCart();
    const pathname = usePathname();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    // No mostrar en el inicio ni con el carrito vacío
    if (pathname === "/" || pathname === "/shipping" || totalItems === 0) return null;

    return (
        <div className="nav-cart flex fixed bottom-0 w-full py-4 bg-black bg-opacity-50 text-white justify-between px-4">
            <div className='flex gap-x-3'>
                <p><i className='bx bx-cart-add'></i> {totalItems}</p>
                <p>Total Cost: ${totalCost}</p>
            </div>
            <div>
                <Link href="/shipping">Open to cart</Link>
            </div>
        </div>
    )
}

export default NavbarCart