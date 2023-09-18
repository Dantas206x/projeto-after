import React from 'react'
import { imagen1, imagen2 ,imagen3 , imagen4, imagen5, imagen6, imagen7, } from "../assets"

const Galeria = () => {
  return (
    <div className="container my-32 mx-auto">
      <div className=' text-center mx-4 justify-center content-center text-center'>
        <h2 className='gradientecor rounded  py-5 font-bold upeercase text-bold text-xl'>GALERIA</h2>
        <div className='border-b-2 text-center   justify-center content-center text-center text-bold text-xl upeercase '>CONFIRA AS FOTOS E VIDEOS DE NOSSOS EVENTOS!</div>
      </div>
      <a href='https://drive.google.com/drive/u/0/folders/1mJZ64Wuvhn51D-p7DpHoLbL9HYeNfmbF' target='_blank' className=''>
      
      <div class="container mx-auto px-5 py-10 lg:px-32 lg:pt-24 gradientecoral2 rounded-xl">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={imagen2} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={imagen3} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={imagen4} />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={imagen5} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={imagen6} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
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