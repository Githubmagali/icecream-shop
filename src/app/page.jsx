"use client"
import SwiperPage from '@/app/swiper/page'
import { useInView } from 'react-intersection-observer';
import data from '@/assets/slider2.json'
import ResendPage from '@/app/contact/page.jsx';
import StorePage from '@/app/branchOffices/page.jsx';

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




function HomePage() {
  const imgs = data.chocolate;
  const teaImg = data.forTheTea;


  return (
    <>
      <SwiperPage />
      <div className='flex items-center justify-center gap-x-10 py-10 text-yellow-700'>
        <i className='bx bxl-instagram text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:-translate-y-4'></i>
        <i className='bx bxl-facebook-circle text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:-translate-y-4' ></i>
        <i className='bx bxl-gmail text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:-translate-y-4' ></i>
        <i className='bx bxl-tiktok text-3xl  lg:text-5xl cursor-pointer transition-transform transform hover:-translate-y-4'></i>
        <i className='bx bxl-whatsapp text-3xl lg:text-5xl cursor-pointer transition-transform transform hover:-translate-y-4' ></i>
      </div>

      <h1 className='flex items-center justify-center text-center text-5xl pb-5 text-yellow-500'>For the tea</h1>
      <div className='lg:grid lg:grid-cols-3'>
      {teaImg.map((item, index)=>(
        <AnimatedItem2 key={index} index={index}>
          <div>
            <div className='flex-1 px-2'>
              <img 
              src={item.img}
              alt={item.name}
              className="w-full h-72 object-cover rounded-md shadow-2xl shadow-gray-400"
              />
            </div>
          </div>

        </AnimatedItem2>
      ))}
      </div>
      

      <h1 className='flex items-center justify-center text-center text-5xl pb-5 text-yellow-500'>Chocolates</h1>

      <div className='lg:grid lg:grid-cols-3'>
        {imgs.map((imagen, index) => (
          <AnimatedItem key={index} index={index}>
            <div>
              <div className="flex-1 px-2">
                <img src={imagen.img}
                  alt={imagen.name}
                  className="w-full h-72 object-cover rounded-md shadow-2xl shadow-gray-400" />
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
      <ResendPage/>

      <StorePage />

    </>

  )
}

export default HomePage