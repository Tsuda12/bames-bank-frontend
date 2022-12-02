import React from 'react'
import bcoin from '../assets/bcoin.png'


const Page2  = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green to-dark-green | lg:flex-row lg:justify-around'>
        {/* BCoin logo */}
        <div className='w-72 animate-bounce transition-all | lg:animate-none lg:hover:-translate-y-3.5 hover:transition-all | xl:w-80 | 2xl:w-96 '>
          <img src={bcoin}></img>
        </div>

        {/* Messages */}
        <div className='text-center | lg:text-left'>
          {/* Message */}
          <div className='mt-10 text-xl text-white font-montserrat font-black | sm:text-3xl | md:text-4xl | lg:mt-0 | xl:text-5xl | 2xl:text-6xl'>
            <p>RECEIVE <span className='text-semi-dark-blue'>BCOINS</span> AND USE THEM</p>
            <p>IN YOUR FAVORITES</p>
            <p>GAMES</p>
          </div>

          {/* Message 2 */}
          <div className='mt-10 text-base text-white font-montserrat font-light | sm:text-2xl | lg:mt-5'>
            <p>FOR <span className='text-semi-dark-blue'>R$10</span> YOU BUY, YOU GET <span className='text-semi-dark-blue'>1 BCOIN</span></p>
          </div>
        </div>
    </div>
  )
}

export default Page2