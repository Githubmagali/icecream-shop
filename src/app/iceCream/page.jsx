/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cartProvider";
import data from "@/assets/slider.json";
import Footer from "@/components/footer";
import IceCreamSelection from "@/components/IceCreamSelection";
import { sizeMapping as size } from "@/assets/sizeMapping";
function IceCream() {
  const [selections, setSelections] = useState([
    { id: 1, size: size.small, flavors: Array(4).fill(null) },
  ]);

  const handleSizeChange = (id, size) => {
    setSelections((prevSelections) =>
      prevSelections.map((selection) => {
        if (selection.id === id) {
          const numFlavors = size === "1kg" ? 4 : 3;
          const updatedFlavors = selection.flavors.slice(0, numFlavors);
          return { ...selection, size, flavors: updatedFlavors };
        }
        return selection;
      })
    );
  };

  const addSelection = () => {
    const newSelection = {
      id: selections.length + 1,
      size: selections[-1].size,
      flavors: Array(4).fill(null),
    };
    setSelections([...selections, newSelection]);
  };

  const removeSelection = (id) => {
    const updatedSelections = selections.filter(
      (selection) => selection.id !== id
    );
    setSelections(updatedSelections);
  };

  const isNextStepButtonDisabled = selections.some((selection) =>
    selection.flavors.some((flavor) => flavor === null)
  );

  return (
    <>
      <div className="pl-6 pt-5">
        <h1 className="text-2xl font-bold mb-4">Create Your Ice Cream</h1>
        {selections.map((selection) => (
          <IceCreamSelection
            key={selection.id}
            selection={selection}
            onSizeChange={(size) => handleSizeChange(selection.id, size)}
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
