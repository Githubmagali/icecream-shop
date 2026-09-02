"use client"
import { useState } from "react"
import { useCart } from "@/context/cartProvider"
import { location } from "@/assets/offices"

function OrderPage() {
    const { cart } = useCart()
    const [deliveryType, setDeliveryType] = useState(null)
    const [branch, setBranch] = useState("")
    const [form, setForm] = useState({
        email: "",
        fullname: "",
        phone: "",
        dni: "",
        address: "",
        depto: "",
        observations: "",
    })

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ ...form, branch, deliveryType })
    }

    return (
        <div className="flex flex-col items-center w-full px-4 py-10">
            <h1 className="text-5xl text-center">Order page</h1>

            <h2 className="text-xl font-bold mt-8">Your cart</h2>
            <div className="w-full max-w-sm mt-3 flex flex-col gap-y-2">
                {cart?.map((item) => (
                    <div key={item.id} className="bg-gray-50 text-center py-3 rounded-md">
                        {item.name} - {item.quantity} x ${item.price}
                    </div>
                ))}
            </div>

            <p className="text-xl mt-6">
                Total Cost: ${cart?.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </p>

            {deliveryType === "delivery" && (
                <p className="text-amber-800 text-sm mt-3">WE WILL TAKE IT TO YOU</p>
            )}

            <div className="flex gap-x-6 mt-6">
                <button
                    type="button"
                    onClick={() => setDeliveryType("takeaway")}
                    className={`px-4 py-2 rounded-md text-white ${deliveryType === "takeaway" ? "bg-gray-600" : "bg-gray-400 hover:bg-gray-500"
                        }`}
                >
                    Take away
                </button>
                <button
                    type="button"
                    onClick={() => setDeliveryType("delivery")}
                    className={`px-4 py-2 rounded-md text-white ${deliveryType === "delivery" ? "bg-gray-600" : "bg-gray-400 hover:bg-gray-500"
                        }`}
                >
                    Delivery
                </button>
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-y-3 w-full max-w-sm mt-10"
            >
                {deliveryType === "takeaway" && (
                    <>
                        <label htmlFor="branch" className="text-center">Store</label>
                        <select
                            id="branch"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            required
                            className="border rounded-md px-4 py-1"
                        >
                            <option value="">Selected</option>
                            {location.map((local, index) => (
                                <option key={local.id ?? index} value={local.name}>
                                    {local.name}
                                </option>
                            ))}
                        </select>
                    </>
                )}
                <label htmlFor="email" className="text-center">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border rounded-md px-3 py-1"
                />

                <label htmlFor="fullname" className="text-center">Fullname *</label>
                <input
                    id="fullname"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    placeholder="Fullname"
                    required
                    className="w-full border rounded-md px-3 py-1"
                />

                <label htmlFor="phone" className="text-center">Phone *</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full border rounded-md px-3 py-1"
                />

                <label htmlFor="dni" className="text-center">DNI *</label>
                <input
                    id="dni"
                    name="dni"
                    value={form.dni}
                    onChange={handleChange}
                    placeholder="DNI"
                    required
                    className="w-full border rounded-md px-3 py-1"
                />
                {deliveryType === "delivery" && (
                    <>
                        <label htmlFor="address" className="text-center">Address *</label>
                        <input
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Address"
                            required
                            className="w-full border rounded-md px-3 py-1"
                        />

                        <label htmlFor="depto" className="text-center">Depto</label>
                        <input
                            id="depto"
                            name="depto"
                            value={form.depto}
                            onChange={handleChange}
                            placeholder="Depto"
                            className="w-full border rounded-md px-3 py-1"
                        />
                    </>
                )}

                <label htmlFor="observations" className="text-center">Observations</label>
                <input
                    id="observations"
                    name="observations"
                    value={form.observations}
                    onChange={handleChange}
                    placeholder="observations"
                    className="w-full border rounded-md px-3 py-1"
                />

                <button
                    type="submit"
                    disabled={!deliveryType}
                    className="bg-slate-600 hover:bg-slate-700 disabled:bg-gray-300 text-white px-6 py-1 rounded-md mt-4"
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default OrderPage