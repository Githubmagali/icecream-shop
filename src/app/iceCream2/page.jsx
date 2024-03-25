/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/cartProvider";
import data from "@/assets/slider.json";
import Footer from "@/components/footer";
import sizeMapping from "@/assets/sizeMapping";
function IceCream() {
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const [selections, setSelections] = useState([sizeMapping.small]);

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

//
//
//
//
//
//
//
//
//
//
//
//
//
//

function IceCreamSelection({ selection, onRemove, onSizeChange }) {
  const [selectedFlavors, setSelectedFlavors] = useState(
    Array(selection.size === "1kg" ? 4 : 3).fill(null)
  );

  const handleFlavorChange = (index, flavor) => {
    const updatedFlavors = [...selectedFlavors];
    updatedFlavors[index] = flavor;
    setSelectedFlavors(updatedFlavors);
  };

  const iceCream = data.quantityIceCream.find((item) =>
    item.name.toLowerCase().includes(selection.size)
  );

  return (
    <div className="mb-8 p-4 border border-gray-300 rounded-md">
      <div className="flex items-center mb-4">
        {iceCream && (
          <>
            <img
              src={iceCream.img}
              alt={iceCream.name}
              className="w-32 h-32 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-bold mb-2">Size:</h3>
              <select
                value={selection.size}
                onChange={(event) =>
                  onSizeChange(selection.id, event.target.value)
                }
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
          </>
        )}
      </div>
      {Array.from({ length: selection.size === "1kg" ? 4 : 3 }).map(
        (_, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-1">
              Flavor {index + 1} of {selection.size === "1kg" ? 4 : 3}:
            </label>
            <select
              value={selectedFlavors[index] || ""}
              onChange={(event) =>
                handleFlavorChange(index, event.target.value)
              }
              className="border border-gray-400 px-2 py-1 w-full"
            >
              <option value="" disabled>
                Select Flavor
              </option>
              <optgroup label="Chocolates">
                {data.chocolate.map((flavor) => (
                  <option
                    key={flavor.id}
                    value={flavor.name}
                    disabled={selectedFlavors.includes(flavor.name)}
                  >
                    {flavor.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Creams">
                {data.creams.map((flavor) => (
                  <option
                    key={flavor.id}
                    value={flavor.name}
                    disabled={selectedFlavors.includes(flavor.name)}
                  >
                    {flavor.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Dulces">
                {data.dulce.map((flavor) => (
                  <option
                    key={flavor.id}
                    value={flavor.name}
                    disabled={selectedFlavors.includes(flavor.name)}
                  >
                    {flavor.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Fruits">
                {data.fruits.map((flavor) => (
                  <option
                    key={flavor.id}
                    value={flavor.name}
                    disabled={selectedFlavors.includes(flavor.name)}
                  >
                    {flavor.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        )
      )}
      {selection.id !== 1 && (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={onRemove}
        >
          Remove
        </button>
      )}
    </div>
  );
}

export default IceCream;
