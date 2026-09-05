"use client"
import { useInView } from 'react-intersection-observer';
import data from '@/assets/slider2.json'
import ResendPage from '@/app/contact/page.jsx';
import StorePage from '@/app/branchOffices/page.jsx';
import HomeSwiperPage from '@/app/swipperHome/page.jsx';


function AnimatedItem2({ index, children }) {

  const [ref, inView] = useInView({
    triggerOnce: true, // La animación solo se activa una vez
  });

  return (
    <div
      ref={ref}
      className={`py-10 px-9 rounded-md animate__animated ${inView ? 'animate__fadeIn' : ''}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {children}
    </div>
  );
}

function FlipCard({ front, alt, name, description }) {
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
        <div className="absolute inset-0 w-full h-full rounded-md shadow-2xl shadow-gray-400 bg-yellow-50 border border-yellow-700/20 p-5 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-yellow-700 text-lg font-medium mb-2">{name}</h3>
          <p className="text-gray-700 text-xs leading-relaxed overflow-y-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}




function HomePage() {
  const imgs = data.chocolate;
  const teaImg = data.forTheTea;


  return (
    <>
      <section className="relative h-[85vh] w-full">
        <img
          src="/swiper-ice.png"
          alt="Ice Cream Store"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-5xl lg:text-7xl font-light tracking-wide leading-tight">
            Our
            <br />
            <span className="font-normal">Ice Creams</span>
          </h1>
          <p className="text-white text-sm lg:text-base mt-4 tracking-wide max-w-2xl mx-auto">
            Discover the perfect blend of flavors and textures in our ice creams, crafted with care to delight your taste buds. Indulge in a creamy experience that will leave you craving for more.
          </p>
        </div>
      </section>

      {/* capa oscura para contraste */}


      <div className='flex items-center justify-center gap-x-10 py-10 text-yellow-700'>
        <i className='bx bxl-instagram text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400'></i>
        <i className='bx bxl-facebook-circle text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400' ></i>
        <i className='bx bxl-gmail text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400' ></i>
        <i className='bx bxl-tiktok text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400'></i>
        <i className='bx bxl-whatsapp text-3xl lg:text-5xl cursor-pointer transition-transform transform hover:text-yellow-400' ></i>
      </div>

      <HomeSwiperPage />

      <h1 className='flex items-center justify-center text-center text-3xl lg:text-5xl py-5 text-yellow-500'>For the tea</h1>
      <div className='lg:grid lg:grid-cols-3'>
        {teaImg.map((item, index) => (
          <AnimatedItem2 key={index} index={index}>
            <div className="px-2">
              <FlipCard
                front={item.img}
                alt={item.name}
                name={item.name}
                description={item.description}
              />
            </div>
          </AnimatedItem2>
        ))}
      </div>


      <h1 className='flex items-center justify-center text-center  text-3xl lg:text-5xl py-5 text-yellow-500'>Chocolates</h1>

      <div className='lg:grid lg:grid-cols-3'>
        {imgs.map((item, index) => (
          <AnimatedItem2 key={index} index={index}>
            <FlipCard  front={item.img}
                alt={item.name}
                name={item.name}
                description={item.description} />
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