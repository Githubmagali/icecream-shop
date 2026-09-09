"use client";

const models = [
  { id: "Chocolate", name: "Chocolates", icon: "bx bx-candles", img: "/chocolate-100.jpg" },
  { id: "Cheesecake chocolate", name: "Cheesecake chocolate", icon: "bx bx-cake", img: "/chescho.jpg" },
  { id: "Apple Cake", name: "Apple Cake", icon: "bx bx-cake", img: "/appleCake.jpg" },
  { id: "Brownie", name: "Brownies", icon: "bx bx-cookie", img: "/brownie.png" },
  { id: "Bombon Milk", name: "Bombon Milk", icon: "bx bx-candles", img: "/bombon-milk.jpg" },
  { id: "cookies", name: "cookies", icon: "bx bx-cookie", img: "/cookies.png" },
  { id: "Bombon", name: "Bombon", icon: "bx bx-candles", img: "/swiper-bombon.jpg" },
  { id: "Tiramisu", name: "Tiramisu", icon: "bx bx-coffee", img: "/tiramisu.png" },
  { id: "Cheesecake", name: "Cheesecacke", icon: "bx bx-cake", img: "/bckg.png" },
  { id: "Ice cream", name: "Ice cream", icon: "bx bx-ice-cream", img: "/swiper-2.jpg" },
];

function ModelCard({ model }) {
  return (
    <div className="group relative w-56 h-72 shrink-0 bg-white overflow-hidden cursor-pointer">
      <img
        src={model.img}
        alt={model.name}
        className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
      />
      <div className="relative z-10 flex items-center justify-center gap-2 h-full text-neutral-900 transition-colors duration-300 group-hover:text-white">
        <i className={`${model.icon} text-xl`}></i>
        <span className="text-sm font-medium">{model.name}</span>
      </div>
    </div>
  );
}

function ModelsMarquee() {
  return (
    <section className="bg-[#f2efe9] py-16 overflow-hidden">
      <div className="text-center px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3a1414]">
          Our products
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#3a1414]">
          Visit us at our branches.
        </p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {/* la lista va duplicada: cuando la primera copia sale de pantalla,
              la segunda ya ocupa su lugar y el loop se ve continuo */}
          {[...models, ...models].map((model, i) => (
            <ModelCard key={`${model.id}-${i}`} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModelsMarquee;