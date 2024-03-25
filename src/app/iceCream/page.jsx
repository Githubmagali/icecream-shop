/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cartProvider";
import data from "@/assets/slider.json";
import Footer from "@/components/footer";
import IceCreamSelection from "@/components/IceCreamSelection";

function IceCream() {
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const [selectedSize, setSelectedSize] = useState("1kg");
  const [selections, setSelections] = useState([{ id: 1, size: "1kg" }]);

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setSelectedSize(size);
    setSelections([{ id: 1, size }]);
  };

  const addSelection = () => {
    const newSelection = {
      id: selections.length + 1,
      size: selectedSize,
    };
    setSelections([...selections, newSelection]);
  };

  const removeSelection = (id) => {
    const updatedSelections = selections.filter(
      (selection) => selection.id !== id
    );
    setSelections(updatedSelections);
  };

  const isNextStepButtonDisabled = selections.length === 0;

  return (
    <>
      <div className="pl-6 pt-5">
        <h1 className="text-2xl font-bold mb-4">Create Your Ice Cream</h1>
        <div className="mb-8">
          <label htmlFor="size" className="block mb-2">
            Select Size:
          </label>
          <select
            id="size"
            value={selectedSize}
            onChange={handleSizeChange}
            className="border border-gray-400 px-2 py-1"
          >
            {data.quantityIceCream.map((item) => (
              <option
                key={item.id}
                value={item.name.split(" ").pop().toLowerCase()}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {selections.map((selection) => (
          <IceCreamSelection
            key={selection.id}
            selection={selection}
            onRemove={() => removeSelection(selection.id)}
          />
        ))}
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={addSelection}
          >
            + Add Another Pot
          </button>
          <Link href="/next-step">
            <button
              className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
                isNextStepButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isNextStepButtonDisabled}
            >
              Next Step
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IceCream;
