import React from 'react'
import { Icon } from 'react-icons-kit'
import {retweet} from 'react-icons-kit/fa/retweet'
import {creditCard} from 'react-icons-kit/fa/creditCard'
import {bank} from 'react-icons-kit/fa/bank'
import {history} from 'react-icons-kit/fa/history'
import {cog} from 'react-icons-kit/fa/cog'


const Profile = () => {
  return (
    <div className='w-full h-full py-10 bg-gradient-to-b from-dark-blue to-semi-dark-blue flex flex-col justify-around items-center | xl:h-screen'>
      {/* Welcome */}
      <h1 className='text-xl text-white font-montserrat font-normal'>Welcome, <span className='font-semibold text-green'>Username!</span></h1>

      {/* Data */}
      <div className='w-72 mt-3 px-5 py-5 border-y-2 border-green | md:flex md:flex-row md:justify-around md:items-center md:w-128'>
        {/* Balance */}
        <div>
          <h1 className='text-white font-montserrat font-normal'><span className='font-semibold text-green'>R$</span> 15000</h1>
        </div>

        {/* Number Account */}
        <div>
          <h1 className='mt-5 text-white font-montserrat font-normal | md:mt-0'><span className='font-semibold text-green'>Account</span> 1006185-0</h1>
        </div>

        {/* Agency */}
        <div>
          <h1 className='mt-5 text-white font-montserrat font-normal | md:mt-0'><span className='font-semibold text-green'>Agency</span> 2582-0</h1>
        </div>
      </div>

      {/* Operations */}
      <div className='mt-5 flex flex-col justify-center items-center | md:grid md:grid-cols-2 md:gap-3 | xl:flex xl:flex-row xl:justify-around xl:w-full'>
        {/* Transfer */}
        <div className='w-72 h-72 flex flex-col justify-around items-center bg-white transition-all | hover:transition-all hover:border-b-4 hover:border-green | xl:mt-0'>
          <Icon className='text-green' icon={retweet} size={60}/>
          <h1 className='text-5xl text-green font-bebas font-black'>TRANSFER</h1>
          {/* Text */}
          <div className='flex flex-col justify-center items-center'>
            <p className='text-lg text-dark-blue font-montserrat font-semibold'>Wish an fast transfer?</p>
            <p className='text-lg text-green font-montserrat font-semibold'>Do an PIX</p>
          </div>
        </div>

        {/* Card */}
        <div className='mt-5 w-72 h-72 flex flex-col justify-around items-center bg-white transition-all | hover:transition-all hover:border-b-4 hover:border-green | md:mt-0 |xl:mt-0'>
          <Icon className='text-green' icon={creditCard} size={60}/>
          <h1 className='text-5xl text-green font-bebas font-black'>CARD</h1>
          {/* Text */}
          <div className='flex flex-col justify-center items-center'>
            <p className='text-lg text-dark-blue font-montserrat font-semibold'>Do you want an Card?</p>
            <p className='text-lg text-green font-montserrat font-semibold'>Solicite here</p>
          </div>
        </div>

        {/* Loan */}
        <div className='mt-5 w-72 h-72 flex flex-col justify-around items-center bg-white transition-all | hover:transition-all hover:border-b-4 hover:border-green | md:mt-1 | xl:mt-0'>
          <Icon className='text-green' icon={bank} size={60}/>
          <h1 className='text-5xl text-green font-bebas font-black'>LOAN</h1>
          {/* Text */}
          <div className='flex flex-col justify-center items-center'>
            <p className='text-lg text-dark-blue font-montserrat font-semibold'>Without money?</p>
            <p className='text-lg text-green font-montserrat font-semibold'>Do an loan with us</p>
          </div>
        </div>

        {/* SETTINGS */}
        <div className='mt-5 w-72 h-72 flex flex-col justify-around items-center bg-white transition-all | hover:transition-all hover:border-b-4 hover:border-green | md:mt-1 | xl:mt-0'>
          <Icon className='text-green' icon={cog} size={60}/>
          <h1 className='text-5xl text-green font-bebas font-black'>EXTRACT</h1>
          {/* Text */}
          <div className='flex flex-col justify-center items-center'>
            <p className='text-lg text-dark-blue font-montserrat font-semibold'>Change your informations?</p>
            <p className='text-lg text-green font-montserrat font-semibold'>Click here</p>
          </div>
        </div>

        {/* EXTRACT */}
        <div className='mt-5 w-72 h-72 flex flex-col justify-around items-center bg-white transition-all | hover:transition-all hover:border-b-4 hover:border-green | md:mt-1 | xl:mt-0'>
          <Icon className='text-green' icon={history} size={60}/>
          <h1 className='text-5xl text-green font-bebas font-black'>EXTRACT</h1>
          {/* Text */}
          <div className='flex flex-col justify-center items-center'>
            <p className='text-lg text-dark-blue font-montserrat font-semibold'>What you spent?</p>
            <p className='text-lg text-green font-montserrat font-semibold'>See here</p>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button className='mt-10 w-48 h-10 bg-white font-montserrat font-semibold text-dark-blue p-2 transition-all | hover:transition-all hover:border-b-4 hover:border-white hover:bg-red hover:text-white' type='submit'>LOG OUT</button>
    </div>
  )
}

export default Profile