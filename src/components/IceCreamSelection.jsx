/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import data from "@/assets/slider.json";
import sizeMapping from "@/utils/sizeMapping";

function IceCreamSelection({ selection, onSizeChange, onRemove }) {
  const [selectedFlavors, setSelectedFlavors] = useState(
    Array(selection.size === "1kg" ? 4 : 3).fill(null)
  );
  
  const handleFlavorChange = (index, flavor) => {
    const updatedFlavors = [...selectedFlavors];
    updatedFlavors[index] = flavor;
    setSelectedFlavors(updatedFlavors);
  };

  return (
    <div className="mb-8 p-4 border border-gray-300 rounded-md">
      <div className="flex items-center mb-4">
        <img
          src={selection.img}
          alt={selection.name}
          className="w-32 h-32 object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-bold mb-2">{selection.size} Pot</h3>
          <select
            value={selection.size}
            onChange={(event) => onSizeChange(selection.id, event.target.value)}
            className="border border-gray-400 px-2 py-1"
          >
            {Object.entries(sizeMapping).map(([key, value]) => (
              <option key={key} value={value.size}>
                {value.size}
              </option>
            ))}
          </select>
        </div>
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

export default IceCreamSelection;
