"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const items = [
  {
    id: 1,
    name: "Chocolate",
    img: "/swiper-chocolate.jpg",
    description: "Tuesday 20% OFF"
  },
  {
    id: 2,
    name: "Drink",
    img: "/swiper-drink.jpg",
    description: "Hot and cold coffee"
  },
  {
    id: 3,
    name: "Ice cream",
    img: "/swiper-icecream.jpg",
    description: "Buy from our page and get a 15% discount"
  },
  {
    id: 5,
    name: "Ice cream",
    img:"/swiper-icecream-americano.png"
  },{
    id:6,
    name:"Bombon",
    img:"/swiper-bombon.jpg"
  }
]

function SwiperPage(){
    return(
        <div>
        <Swiper
          loop
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center'>
                <img src={item.img} alt={item.name} className='w-3/4' />
                <p className='absolute text-5xl font-bold text-white top-0'>{item.description}</p>
              </div>
  
            </SwiperSlide>
  
          ))}
          </Swiper>
          </div>
  
  
    )
}

export default SwiperPage