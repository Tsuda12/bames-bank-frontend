import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../styles.css";


const Page5 = () => {
  return (
    <div id="page5" className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-b from-dark-green to-green'>
        {/* Message */}
        <div className='text-center'>
            <p className='font-montserrat font-black text-5xl text-white | sm:text-6xl'>PARTNERS GAMES</p>
        </div>

        {/* Slider */}
        <div className='w-screen mt-40'>
            <Swiper style={{
                      "--swiper-navigation-color": "#000",
                      "--swiper-navigation-size": "20px",
                    }} loop={true} navigation={true} modules={[Pagination, Navigation]} className="mx-5 text-semi-dark-blue text-center">
                <SwiperSlide> <p className='font-lol text-2xl | sm:text-4xl | lg:text-6xl'>LEAGUE OF LEGENDS</p> </SwiperSlide>
                <SwiperSlide> <p className='font-val text-2xl | sm:text-4xl | lg:text-6xl'>VALORANT</p> </SwiperSlide>
                <SwiperSlide> <p className='font-fort text-2xl | sm:text-4xl | lg:text-6xl'>FORTNITE</p> </SwiperSlide>
            </Swiper>
        </div>

        {/* Message 2 */}
        <div className='mt-40 text-base text-white font-montserrat font-light text-center | sm:text-2xl'>
          <p>ALL GAMES<span className='text-semi-dark-blue'> REMAIN </span> PARTNERS UNTIL THE END OF CONTRACT</p>
        </div>
    </div>
  )
}

export default Page5
