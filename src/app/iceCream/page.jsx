/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cartProvider";
import data from "@/assets/slider.json";
import Footer from "@/components/footer";
import IceCreamSelection from "@/components/IceCreamSelection";

const qIceCream = data.quantityIceCream;
const sizeMapping = {
  small: {
    size: qIceCream.find((item) => item.id === 1).size,
    price: qIceCream.find((item) => item.id === 1).price,
    img: qIceCream.find((item) => item.id === 1).img,
  },
  medium: {
    size: qIceCream.find((item) => item.id === 2).size,
    price: qIceCream.find((item) => item.id === 2).price,
    img: qIceCream.find((item) => item.id === 2).img,
  },
  large: {
    size: qIceCream.find((item) => item.id === 3).size,
    price: qIceCream.find((item) => item.id === 3).price,
    img: qIceCream.find((item) => item.id === 3).img,
  },
};

function IceCream() {
  console.log("sizeMapping", sizeMapping);
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const [selections, setSelections] = useState([
    { id: 1, ...sizeMapping.small },
  ]);

  const addSelection = () => {
    const newSelection = {
      id: selections.length + 1,
      ...sizeMapping.small,
    };
    setSelections([...selections, newSelection]);
  };

  const removeSelection = (id) => {
    const updatedSelections = selections.filter(
      (selection) => selection.id !== id
    );
    setSelections(updatedSelections);
  };

  const handleSizeChange = (id, size) => {
    const updatedSelections = selections.map((selection) => {
      if (selection.id === id) {
        return { ...selection, size };
      }
      return selection;
    });
    setSelections(updatedSelections);
  };

  const isNextStepButtonDisabled = selections.length === 0;

  return (
    <>
      <div className="pl-6 pt-5">
        <h1 className="text-2xl font-bold mb-4">Create Your Ice Cream</h1>
        {selections.map((selection) => (
          <IceCreamSelection
            key={selection.id}
            selection={selection}
            onRemove={() => removeSelection(selection.id)}
            onSizeChange={handleSizeChange}
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
