import React from 'react'
import percent from '../assets/percent.png'


const Page4  = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-dark-blue to-semi-dark-blue | lg:flex-row lg:justify-around'>
        {/* BCoin logo */}
        <div className='w-72 animate-bounce transition-all | lg:animate-none lg:hover:-translate-y-3.5 hover:transition-all | xl:w-80 | 2xl:w-128'>
          <img src={percent}></img>
        </div>

        {/* Messages */}
        <div className='text-center | lg:text-left'>
          {/* Message */}
          <div className='mt-10 text-2xl text-white font-montserrat font-black | sm:text-3xl | md:text-4xl | lg:mt-0 | xl:text-6xl | 2xl:text-7xl'>
            <p>NO <span className='text-green'>ANNUAL FEES</span> AND</p>
            <p> <span className='text-green'>MAINTENENCE FEES</span> </p>
          </div>

          {/* Message 2 */}
          <div className='mt-10 text-xs text-white font-montserrat font-light| sm:text-sm | md:text-lg | lg:mt-5'>
            <p>WE OFFER <span className='text-green'>CONFIDENCE</span> TO OUR CUSTOMER</p>
          </div>
        </div>
    </div>
  )
}

export default Page4