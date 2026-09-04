/* eslint-disable @next/next/no-img-element */
"use client";
import data from "@/assets/slider.json";
import sizeMapping from "@/utils/sizeMapping";

const CATEGORIES = [
  { key: "chocolate", label: "Chocolate" },
  { key: "dulce", label: "Dulce de leche" },
  { key: "creams", label: "Creams" },
  { key: "fruits", label: "Fruits" },
  { key: "recomends", label: "Recommendations" },
  { key: "sweetOleasures", label: "Sweet Pleasures" },
  { key: "clasic", label: "Classic" },
];

function IceCreamSelection({ selection, onRemove, onSizeChange, onFlavorChange }) {
  return (
    <div className="border rounded-md p-4 mb-6">
      <div className="flex items-start gap-4">
        <img
          src={selection.img}
          alt={selection.size}
          className="w-32 h-32 object-cover rounded-md"
        />

        <div>
          <p className="font-bold text-xl">{selection.size} Pot</p>
          <p className="text-lg">$ {selection.price}</p>
          <select
            value={selection.size}
            onChange={(e) => onSizeChange(selection.uid, e.target.value)}
            className="border rounded px-2 py-1 mt-2"
          >
            {Object.keys(sizeMapping).map((key) => (
              <option key={key} value={sizeMapping[key].size}>
                {sizeMapping[key].size}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onRemove}
          className="ml-auto text-gray-500 hover:text-red-600"
        >
          Remove
        </button>
      </div>

      {selection.flavors.map((flavor, i) => (
        <div key={i} className="mt-3">
          <label className="block">
            Flavor {i + 1} of {selection.flavors.length}:
          </label>
          <select
            value={flavor}
            onChange={(e) => onFlavorChange(selection.uid, i, e.target.value)}
            className="w-full border rounded px-2 py-1"
          >
            <option value="">Select Flavor</option>
            {CATEGORIES.map((cat) => (
              <optgroup key={cat.key} label={cat.label}>
                {(data[cat.key] ?? []).map((f) => (
                  <option key={`${cat.key}-${f.id}`} value={f.name}>
                    {f.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}

export default IceCreamSelection;