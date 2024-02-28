
import SwiperPage from '@/app/swiper/page'

function HomePage() {
  return (
    <>
      <SwiperPage />
      <div className='flex items-center justify-center gap-x-10 py-10 text-yellow-700'>
        <i className='bx bxl-instagram lg:text-5xl cursor-pointer'></i>
        <i className='bx bxl-facebook-circle lg:text-5xl cursor-pointer' ></i>
        <i className='bx bxl-gmail lg:text-5xl cursor-pointer' ></i>
        <i className='bx bxl-tiktok lg:text-5xl cursor-pointer'></i>
        <i className='bx bxl-whatsapp lg:text-5xl cursor-pointer' ></i>
      </div>

      <h1 className='flex items-center justify-center text-center text-5xl pb-5 text-yellow-500'>For the tea</h1>
      <div className="flex pb-40">
        <div className="flex-1 px-2">
          <img src="cheesecake-fruit.png" className="object-cover w-full h-48" alt="Imagen 1" />
        </div>
        <div className="flex-1 px-2">
          <img src="cheesecake.png" className="object-cover w-full h-48" alt="Imagen 2" />
        </div>
        <div className="flex-1 px-2">
          <img src="lemon-pie.png" className="object-cover w-full h-48" alt="Imagen 3" />
        </div>
      </div>

      <h1 className='flex items-center justify-center text-center text-5xl pb-5 text-yellow-500'>Chocolates</h1>
      <div className="flex pb-40">
        <div className="flex-1 px-2">
          <img src="bombon-milk.jpg" className="object-cover w-full h-48" alt="Imagen 1" />
        </div>
        <div className="flex-1 px-2">
          <img src="chocolate-white.jpg" className="object-cover w-full h-48" alt="Imagen 2" />
        </div>
        <div className="flex-1 px-2">
          <img src="chocolate-blackandwhite.png" className="object-cover w-full h-48" alt="Imagen 3" />
        </div>
      </div>




    </>

  )
}

export default HomePage