/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cartProvider";
import data from "@/assets/slider.json";
import Footer from "@/components/footer";
import IceCreamSelection from "@/components/IceCreamSelection";
import sizeMapping from "@/utils/sizeMapping";

function IceCream() {
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
    console.log("id", id, "size", size);
    const updatedSelections = selections.map((selection) => {
      if (selection.id === id) {
        return {
          ...selection,
          size: size,
          price:
            sizeMapping[
              Object.keys(sizeMapping).find(
                (key) => sizeMapping[key].size === size
              )
            ].price,
          img: sizeMapping[
            Object.keys(sizeMapping).find(
              (key) => sizeMapping[key].size === size
            )
          ].img,
        };
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
