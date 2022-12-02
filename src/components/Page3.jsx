import React from 'react'
import Popup from 'reactjs-popup';
import card_standard from '../assets/card_standard.png'
import card_premium from '../assets/card_premium.png'


const Page3  = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-dark-white to-white'>
      {/* Message */}
      <div className='font-montserrat font-black text-2xl text-center text-semi-dark-blue | sm:text-3xl | md:text-4xl | lg:text-6xl'>
        <p>UP TO <span className='text-green'>2 CARD OPTIONS</span></p>
        <p>TO CHOOSE FROM</p>
      </div>

      <div className='w-screen lg:flex lg: flex-row lg:justify-around lg:mt-16'>
        <div className='flex flex-col justify-center items-center transition-all | hover:-translate-y-3.5 hover:transition-all'>
          {/* PopUp */}
          <Popup trigger={open => (
              <button className='mt-12 w-72 font-bebas font-black text-2xl text-dark-green animate-pulse'>CLICK HERE</button>
            )}
            position="bottom center"
            closeOnDocumentClick
          >
            <span className='flex flex-col justify-center items-center p-2 mt-2 font-montserrat font-medium text-sm bg-white border-x-4 border-x-semi-dark-blue'> 
              <p>Credit Limit  <span className='text-green'>R$2.500</span></p>
              <p>BCoins  <span className='text-green'>B$2</span></p>
            </span>
          </Popup>

          {/* Card Standard */}
          <div className='w-80 flex flex-col justify-center items-center | lg:w-96'>
            <img src={card_standard}></img>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center transition-all | hover:-translate-y-3.5 hover:transition-all'>
          {/* PopUp */}
          <Popup trigger={open => (
              <button className='w-72 font-bebas font-black text-dark-blue text-2xl mt-12 animate-pulse'>CLICK HERE</button>
            )}
            position="bottom center"
            closeOnDocumentClick
          >
            <span className='flex flex-col justify-center items-center p-2 mt-2 font-montserrat font-medium text-sm bg-white border-x-4 border-x-green'> 
              <p>Credit Limit  <span className='text-green'>R$10.000</span></p>
              <p>BCoins  <span className='text-green'>B$6</span></p>
            </span>
          </Popup>

          {/* Card Standard */}
          <div className='w-80 flex flex-col justify-center items-center | lg:w-96'>
            <img src={card_premium}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3