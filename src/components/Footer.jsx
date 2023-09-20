import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div className='gradientecoral3   py-10 text-center flex flex-col justify-center items-center px-5'>
      <img src={logo} alt='logo' className='h-20 w-20 md:mr-3 md:h-20 md:w-20 gradientecoral4 uppercase text-bold'/>
      <h2>AFTER MIDNIGHT</h2>
      <p className='text-icon gradientecoral4 max-w-md mb-12'>After Midnight © 2023-2026 After Midnight. Todos os direitos reservados.</p>

    </div>
  )
}

export default Footer