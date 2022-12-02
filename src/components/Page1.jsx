import React from 'react'
import Icon from 'react-icons-kit'
import {arrowCircleRight} from 'react-icons-kit/fa/arrowCircleRight'


const Page1 = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-dark-blue to-semi-dark-blue'>
        
        {/* Message */}
        <div className='font-montserrat font-black text-3xl text-white text-center | sm:text-4xl | md:text-5xl | lg:text-6xl'>
            <p>FINANTIAL RETURN</p>
            <p>IN YOUR <span className='text-green'>GAME</span></p>
        </div>

        {/* Link to partners */}
        <div className='mt-5'>
            <p> 
                <a href='#page5' className='text-base text-white font-montserrat font-light | sm:text-xl'>
                    SEE PARTNERS GAMES <span className='animate-pulse'><Icon className='text-green' icon={arrowCircleRight}/></span>
                </a> 
            </p>
        </div>
    </div>
  )
}

export default Page1