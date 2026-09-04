"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function HomeSwiperPage() {
  const items = [
    { id: 1, name: "Mixed berries", img: "/Mixed-berries.jpg", description: "Delicious mixed berries ice cream" },
    { id: 2, name: "Vanilla",       img: "/vainilla.png",      description: "Creamy vanilla ice cream" },
    { id: 3, name: "Zabaglione",    img: "/zabaglione.jpg",    description: "Rich zabaglione ice cream" },
    { id: 4, name: "Strawberry",    img: "/strawberry.png",    description: "Fresh strawberry ice cream" },
  ];

  return (
    <div>
      <Swiper
        loop
        spaceBetween={30}
        slidesPerView={1.25}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 32 },
        }}

      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <article
              tabIndex={0}
              className="group relative overflow-hidden py-4 focus:outline-none"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 sm:h-96 object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />

              {/* El panel vive fuera del recuadro (translate-y-full) y sube en hover */}
              <div
                className="absolute inset-x-0 bottom-4 translate-y-full bg-black/70 px-5 py-6 text-white backdrop-blur-sm transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus:translate-y-0 motion-reduce:transition-none"
              >
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-1 text-sm opacity-0 transition-opacity delay-150 duration-300 group-hover:opacity-100 group-focus:opacity-100 motion-reduce:opacity-100">
                  {item.description}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSwiperPage;