import React from 'react'
import { imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, } from "../assets"

const Galeria = () => {
  return (
    <div id='Galeria' className="container my-20 mx-auto ">
      <div className=' text-center mx-4 justify-center content-center text-center'>
        <h2 className='bg-neutral-800  shadow-xl rounded  py-5 font-bold upeercase text-bold text-xl'>GALERIA</h2>
        <div className='border-b-2 text-center   justify-center content-center text-center text-bold text-xl upeercase '>CONFIRA AS FOTOS E VIDEOS DE NOSSOS EVENTOS!</div>
      </div>
      <a href='https://drive.google.com/drive/u/0/folders/1mJZ64Wuvhn51D-p7DpHoLbL9HYeNfmbF' target='_blank' className=''>

        <div className="container mx-auto px-5 py-10 lg:px-32 lg:pt-24 bg-neutral-400  shadow-xl rounded-xl ">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={imagen2} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={imagen3} />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={imagen4} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={imagen5} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={imagen6} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={imagen7} />
              </div>

            </div>
          </div>
        </div>

      </a>


    </div>
  )
}

export default Galeria