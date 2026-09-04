"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/cartProvider";
import IceCreamSelection from "@/components/IceCreamSelection";
import sizeMapping from "@/utils/sizeMapping";

const MAX_FLAVORS = { "1/4kg": 3, "1/2kg": 3, "1kg": 4 };

const makeSelection = (sizeData = sizeMapping.small) => ({
  uid: crypto.randomUUID(),
  ...sizeData,
  flavors: Array(MAX_FLAVORS[sizeData.size] ?? 0).fill(""),
});

function IceCream() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selections, setSelections] = useState([makeSelection()]);
  const [error, setError] = useState("");

  const addSelection = () =>
    setSelections((prev) => [...prev, makeSelection()]);

  const removeSelection = (uid) =>
    setSelections((prev) => prev.filter((s) => s.uid !== uid));

  const handleSizeChange = (uid, size) => {
    const key = Object.keys(sizeMapping).find(
      (k) => sizeMapping[k].size === size
    );
    const sizeData = sizeMapping[key];
    const max = MAX_FLAVORS[size] ?? 0;

    setSelections((prev) =>
      prev.map((s) =>
        s.uid === uid
          ? {
              ...s,
              ...sizeData,
              // conserva lo ya elegido, recorta o rellena según el tamaño nuevo
              flavors: Array.from({ length: max }, (_, i) => s.flavors[i] ?? ""),
            }
          : s
      )
    );
  };

  const handleFlavorChange = (uid, index, value) =>
    setSelections((prev) =>
      prev.map((s) =>
        s.uid === uid
          ? { ...s, flavors: s.flavors.map((f, i) => (i === index ? value : f)) }
          : s
      )
    );

  const handleNextStep = () => {
    const incomplete = selections.findIndex((s) => s.flavors.some((f) => !f));
    if (incomplete !== -1) {
      setError(`Pot ${incomplete + 1}: please choose all the flavors.`);
      return;
    }
    setError("");

    selections.forEach((s) => {
      addToCart({
        // id string y compuesto: no choca con los ids numéricos de "For the tea",
        // y dos potes idénticos suman cantidad en vez de duplicar línea
        id: `icecream|${s.size}|${[...s.flavors].sort().join(",")}`,
        name: `Ice cream ${s.size}`,
        flavors: s.flavors,
        price: s.price,
        img: s.img,
      });
    });

    router.push("/shipping");
  };

  const isNextStepButtonDisabled = selections.length === 0;
  const total = selections.reduce((acc, s) => acc + s.price, 0);

  return (
    <div className="px-6 pt-5">
      <h1 className="text-2xl font-bold mb-4 text-title">
        Create Your Ice Cream
      </h1>

      {selections.map((selection) => (
        <IceCreamSelection
          key={selection.uid}
          selection={selection}
          onRemove={() => removeSelection(selection.uid)}
          onSizeChange={handleSizeChange}
          onFlavorChange={handleFlavorChange}
        />
      ))}

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <div className="flex justify-between items-center">
        <button
          className="btn-ice-cream text-white px-4 py-2 rounded-md mb-4"
          onClick={addSelection}
        >
          + Add Another Pot
        </button>

        <div className="flex items-center gap-4">
          <p className="text-xl">Total: $ {total}</p>
          <button
            onClick={handleNextStep}
            disabled={isNextStepButtonDisabled}
            className={`btn-ice-cream text-white px-4 py-2 rounded-md ${
              isNextStepButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default IceCream;