import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


const News = () => {
  return (

    <div className='container mx-auto gradientecoral2 rounded-xl flex flex-col xl:flex-row items-center md:my-12 p-4 h-[1075px] xl:h-[600px] '>
      <div className='swiper mySwiper w-12/12 xl:w-5/12 swiper-initialized swiper-horizontal swiper-backface-hidden'>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}

          spaceBetween={450}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div id='News' className='swiper-slide hero-event swiper-slide-active h-screen'>
              <div className='max-w-[320px] md:max-w-[400px] xl:max-w-[450px] max-w-[320px] md:max-w-[400px] xl:max-w-[450px]'>
                <div className='rounded-lg overflow-hidden shadow-lg'>


                  {/* IMAGEM */}
                  <img className='max-w-[320px] md:max-w-[400px] lg:max-w-[450px]' src='https://pbs.twimg.com/media/Fg0yissWYAk9lCM?format=jpg&name=large' />
                  <div className='text-left bg-background-light dark:bg-black-300 px-6 py-4'>


                    {/* DATA */}
                    <p className='font-bold text-black-200 text-base mb-3'> 00/00/00</p>


                    {/* COMENTARIO */}
                    <h1 className='font-bold text-xl text-black mb-3'>role hoje colai rapaziada é em SP o blg</h1>
                    <div className='flex mb-8'>
                      <svg className='fill-black' width={20} height={20} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z'></path>
                      </svg>


                      {/* LOCALIZAÇÃO */}
                      <p className='text-black-200 text-base font-bold ml-2'>Club 63, Rio de Janeiro/RJ</p>
                    </div>
                    <a href='https://www.ingresso.com/'>


                      {/* BOTAO  INGRESSO */}
                      <button type='button' className=' bg-elev-1 text-white  dark:hover:bg-white/60 hover:text-primary rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 font-bold text-base'>
                        Saiba mais
                      </button>
                    </a>

                  </div>
                </div>
              </div>
            </div>






          </SwiperSlide>
          <SwiperSlide>  <div className='swiper-slide hero-event swiper-slide-active'>
            <div className='max-w-[320px] md:max-w-[400px] xl:max-w-[450px] max-w-[320px] md:max-w-[400px] xl:max-w-[450px]'>
              <div className='rounded-lg overflow-hidden shadow-lg'>


                {/* IMAGEM */}
                <img className='max-w-[320px] md:max-w-[400px] lg:max-w-[450px]' src='https://pbs.twimg.com/media/Fg0yissWYAk9lCM?format=jpg&name=large' />
                <div className='text-left bg-background-light dark:bg-black-300 px-6 py-4'>


                  {/* DATA */}
                  <p className='font-bold text-black-200 text-base mb-3'> 00/00/00</p>


                  {/* COMENTARIO */}
                  <h1 className='font-bold text-xl text-black mb-3'>role hoje colai rapaziada é em SP o blg</h1>
                  <div className='flex mb-8'>
                    <svg className='fill-black' width={20} height={20} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z'></path>
                    </svg>


                    {/* LOCALIZAÇÃO */}
                    <p className='text-black-200 text-base font-bold ml-2'>zapzap</p>
                  </div>
                  <a href='https://www.ingresso.com/'>


                    {/* BOTAO  INGRESSO */}
                    <button type='button' className=' bg-elev-1 text-white  dark:hover:bg-white/60 hover:text-primary rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 font-bold text-base'>
                      Saiba mais
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>  <div className='swiper-slide hero-event swiper-slide-active'>
            <div className='max-w-[320px] md:max-w-[400px] xl:max-w-[450px] max-w-[320px] md:max-w-[400px] xl:max-w-[450px]'>
              <div className='rounded-lg overflow-hidden shadow-lg'>


                {/* IMAGEM */}
                <img className='max-w-[320px] md:max-w-[400px] lg:max-w-[450px]' src='https://pbs.twimg.com/media/Fg0yissWYAk9lCM?format=jpg&name=large' />
                <div className='text-left bg-background-light dark:bg-black-300 px-6 py-4'>


                  {/* DATA */}
                  <p className='font-bold text-black-200 text-base mb-3'> 00/00/00</p>


                  {/* COMENTARIO */}
                  <h1 className='font-bold text-xl text-black mb-3'>role hoje colai rapaziada é em SP o blg</h1>
                  <div className='flex mb-8'>
                    <svg className='fill-black' width={20} height={20} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule='evenodd' clipRule='evenodd' d='M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z'></path>
                    </svg>


                    {/* LOCALIZAÇÃO */}
                    <p className='text-black-200 text-base font-bold ml-2'>Club 63, Rio de Janeiro/RJ</p>
                  </div>
                  <a href='https://www.ingresso.com/'>


                    {/* BOTAO  INGRESSO */}
                    <button type='button' className=' bg-elev-1 text-white  dark:hover:bg-white/60 hover:text-primary rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 font-bold text-base'>
                      Saiba mais
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div></SwiperSlide>



        </Swiper>
      </div>
      <div className='w-12/12 xl:w-7/12 h-full md:h-[520px]'>
        <p className='xl:ml-6 2xl:ml-24 mb-9 font-bold text-xl dark:text-white text-black text-left rounded gradientecor px-4 py-4 uppercase'>


          {/* Confira os proximos eventos */}
          Confira os próximos eventos</p>
        <div className='overflow-y-scroll h-96 md:h-[400px] space-y-4 flex flex-col items-center '>


          {/* Href para ingresso */}
          <a href='https://www.ingresso.com/' className='flex flex-col md:flex-row shadow-lg max-w-[326px] md:max-w-[667px] max-h-[320px] md:max-h-[150px] mb-4'>
            <img className='rounded-t-lg md:rounded-l-lg md:w-[229px]'


              /* COMENTÁRIO JSX */
              src='https://pbs.twimg.com/media/Fg0yissWYAk9lCM?format=jpg&name=large' />
            <div className='text-left bg-background-light dark:bg-black-300 max-w-[326px] md:max-w-[700px] px-4 py-4 md:py-2 rounded-r-lg' >


              {/* Data  */}
              <p className='font-bold text-black-200 text-sm mb-0.5'>00/00/00</p>

              {/* Descrição */}
              <h1 className='font-bold  text-black-200 text-base mb-4'>role hoje colai rapaziada é em SP vai se daora o blg</h1>
              <div className='flex'>
                <svg className='fill-black ' width={20} height={20} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fillRule='evenodd' clipRule="evenodd" d='M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z'></path>
                </svg>

                {/* Descrição */}
                <p className='text-black-200 text-base font-bold ml-2'>PERTO DA RUA TAL SEM ERRO</p>
              </div>
            </div>
          </a>
          {/* Href para ingresso */}
          <a href='https://www.ingresso.com/' className='flex flex-col md:flex-row shadow-lg max-w-[326px] md:max-w-[667px] max-h-[320px] md:max-h-[150px] mb-4'>
            <img className='rounded-t-lg md:rounded-l-lg md:w-[229px]'


              /* COMENTÁRIO JSX */
              src='https://pbs.twimg.com/media/Fg0yissWYAk9lCM?format=jpg&name=large' />
            <div className='text-left bg-background-light dark:bg-black-300 max-w-[326px] md:max-w-[700px] px-4 py-4 md:py-2 rounded-r-lg' >


              {/* Data  */}
              <p className='font-bold text-black-200 text-sm mb-0.5'>00/00/00</p>

              {/* Descrição */}
              <h1 className='font-bold  text-black-200 text-base mb-4'>role hoje colai rapaziada é em SP vai se daora o blg</h1>
              <div className='flex'>
                <svg className='fill-black ' width={20} height={20} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fillRule='evenodd' clipRule="evenodd" d='M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z'></path>
                </svg>

                {/* Descrição */}
                <p className='text-black-200 text-base font-bold ml-2'>PERTO DA RUA TAL SEM ERRO</p>
              </div>
            </div>
          </a>
          {/* Href para ingresso */}
          <a href='https://www.ingresso.com/' className='flex flex-col md:flex-row shadow-lg max-w-[326px] md:max-w-[667px] max-h-[320px] md:max-h-[150px] mb-4'>
            <img className='rounded-t-lg md:rounded-l-lg md:w-[229px]'


              /* COMENTÁRIO JSX */
              src='https://pbs.twimg.com/media/Fg0yissWYAk9lCM?format=jpg&name=large' />
            <div className='text-left bg-background-light dark:bg-black-300 max-w-[326px] md:max-w-[700px] px-4 py-4 md:py-2 rounded-r-lg' >


              {/* Data  */}
              <p className='font-bold text-black-200 text-sm mb-0.5'>00/00/00</p>

              {/* Descrição */}
              <h1 className='font-bold  text-black-200 text-base mb-4'>role hoje colai rapaziada é em SP vai se daora o blg</h1>
              <div className='flex'>
                <svg className='fill-black ' width={20} height={20} viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fillRule='evenodd' clipRule="evenodd" d='M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z'></path>
                </svg>

                {/* Descrição */}
                <p className='text-black-200 text-base font-bold ml-2'>PERTO DA RUA TAL SEM ERRO</p>
              </div>
            </div>
          </a>


        </div>

      </div>
    </div>
  )
}

export default News