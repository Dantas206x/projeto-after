import React from 'react'

const Sobre = () => {
  return (
    <div className="container my-32 mx-auto border-b-2 border-divider-3 shadow-lg rounded-lg pb-4 flex gap-12 flex-col md:flex-row justify-between px-5"> 
    <div className='max-w-4xl'>
      <h2 className='text-2xl font-bold mb-2 text-center md:text-left text-black'>Redes sociais</h2>
      <p className='text-icon dark:text-black-200 text-center md:text-left'>
      Nos siga nas redes sociais para ficar de olho nas novidades da After Midnight!
      </p>
    </div>
    <div className='flex gap-5 item-center justify-center'>
      <a href='https://twitter.com/_aftermidnightt'>
       <img src='https://cdn-icons-png.flaticon.com/512/733/733635.png' width={24} height={24}/>
      </a>
      <a href='https://twitter.com/_aftermidnightt'>
       <img src='https://cdn-icons-png.flaticon.com/512/1384/1384031.png' width={24} height={24}/>
      </a>
      <a href='https://twitter.com/_aftermidnightt'>
       <img src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png' width={24} height={24}/>
      </a>
      
      

    </div>

       
  </div>
  )
}

export default Sobre