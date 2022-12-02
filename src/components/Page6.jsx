import React from 'react'
import sqlite from '../assets/sql-lite-logo.png'
import django from '../assets/django-logo.png'
import react from '../assets/react-logo.png'


const Page6 = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        {/* Message */}
        <div>
            <p className='mt-10 font-montserrat font-black text-semi-dark-blue text-center text-2xl | sm:text-3xl | md:text-4xl | lg:text-5xl'>TECHNOLOGIES USED</p>
        </div>

        {/* Technologies */}
        <div className='flex flex-col justify-center items-center | lg:flex-row lg:justify-around lg:w-screen lg:mt-16 lg:mb-10'>
          {/* SQLite */}
          <div className='flex flex-col justify-center items-center'>
            <img className='w-40 mt-10' src={sqlite}></img>
            <p className='font-montserrat font-semibold text-semi-dark-blue'>Database</p>
          </div>

          {/* Django */}
          <div className='flex flex-col justify-center items-center'>
            <img className='w-40 mt-10 | lg:w-72' src={django}></img>
            <p className='font-montserrat font-semibold text-semi-dark-blue'>Backend</p>
          </div>

          {/* React */}
          <div className='flex flex-col justify-center items-center'>
            <img className='w-40 mt-10' src={react}></img>
            <p className='font-montserrat font-semibold text-semi-dark-blue'>Frontend</p>
          </div>
        </div>

        {/* Message */}
        <div className='mt-16'>
            <p className='font-montserrat font-light text-semi-dark-blue text-center text-sm | sm:text-base | md:text-lg | lg:text-xl'>TECHNOLOGIES MAY BE SUBJECT TO <span className='text-green'>CHANGE</span></p>
        </div>
    </div>
  )
}

export default Page6