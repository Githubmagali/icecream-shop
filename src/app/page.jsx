"use client"
import SwiperPage from '@/app/swiper/page'
import { useInView } from 'react-intersection-observer';
import data from '@/assets/slider2.json'
import ResendPage from '@/app/contact/page.jsx';
import StorePage from '@/app/branchOffices/page.jsx';
import HomeSwiperPage from '@/app/swipperHome/page.jsx';

function AnimatedItem({ index, children }) {

  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activa una vez
  });

  return (
    <div
      ref={ref}
      className={`py-10 px-9 rounded-md animate__animated ${inView ? 'animate__fadeInTopRight' : ''}`}
      style={{ animationDelay: `${index * 0.10}s` }}
    >
      {children}
    </div>
  );
}
function AnimatedItem2({ index, children }) {

  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activa una vez
  });

  return (
    <div
      ref={ref}
      className={`py-10 px-9 rounded-md animate__animated ${inView ? 'animate__fadeIn' : ''}`}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      {children}
    </div>
  );
}

function FlipCard({ front, back, alt }) {
  return (
    <div className="group [perspective:1000px] h-72">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Cara frontal */}
        <img
          src={front}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-md shadow-2xl shadow-gray-400 [backface-visibility:hidden]"
        />
        {/* Cara trasera */}
        <img
          src={back}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-md shadow-2xl shadow-gray-400 [backface-visibility:hidden] [transform:rotateY(180deg)]"
        />
      </div>
    </div>
  )
}




function HomePage() {
  const imgs = data.chocolate;
  const teaImg = data.forTheTea;


  return (
    <>
      <SwiperPage />
      <div className='flex items-center justify-center gap-x-10 py-10 text-yellow-700'>
        <i className='bx bxl-instagram text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400'></i>
        <i className='bx bxl-facebook-circle text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400' ></i>
        <i className='bx bxl-gmail text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400' ></i>
        <i className='bx bxl-tiktok text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400'></i>
        <i className='bx bxl-whatsapp text-3xl lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400' ></i>
      </div>

      <HomeSwiperPage />

      <h1 className='flex items-center justify-center text-center text-3xl lg:text-5xl pb-5 text-yellow-500'>For the tea</h1>
      <div className='lg:grid lg:grid-cols-3'>
        {teaImg.map((item, index) => (
          <AnimatedItem2 key={index} index={index}>
            <div className="px-2">
              <FlipCard front={item.img} back={item.img2} alt={item.name} />
            </div>
          </AnimatedItem2>
        ))}
      </div>


      <h1 className='flex items-center justify-center text-center  text-3xl lg:text-5xl py-5 text-yellow-500'>Chocolates</h1>

      <div className='lg:grid lg:grid-cols-3'>
        {imgs.map((item, index) => (
          <AnimatedItem2 key={index} index={index}>
            <FlipCard front={item.img} back={item.img2} alt={item.name} />
          </AnimatedItem2>
        ))}
      </div>
      <ResendPage />

      <section className="separador" aria-hidden="true">
        <div className="separador__bg"></div>
      </section>

      <StorePage />

    </>

  )
}

export default HomePage