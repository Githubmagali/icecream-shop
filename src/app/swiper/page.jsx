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
    description: "Coffe"
  },
  {
    id: 3,
    name: "Ice cream",
    img: "/swiper-icecream.jpg",
    description: "Discount for cash"
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
              <div className='flex bg-hero-pattern '>
                <img src={item.img} alt={item.name} className='w-full h-96 object-cover' />
                {item.description && (
                  <p className='absolute text-label'>{item.description}</p>
                )}
              </div>
  
            </SwiperSlide>
  
          ))}
          </Swiper>
          </div>
  
  
    )
}

export default SwiperPage