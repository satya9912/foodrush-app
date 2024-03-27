import React from 'react'
import aboutPic from "../utils/images/about.png"

const About = () => {
  return (
    <div className='mt-32 flex justify-around mb-40'>
      <div>
        <h1 className='text-7xl w-[700px] font-bold leading-snug text-[#545454]'>Welcome to the world of <span className='bg-[#D97919] text-white rounded-[20px]'>Food Rush</span></h1>
        <p className='w-[600px] text-[#545454] text-xl font-semibold mt-11'>"Experience the delicious rush of goodness with FoodRush meals, lighting up your taste buds and enhancing your well-being."</p>
      </div>
        <div>
          <img alt='about' src={aboutPic} />
        </div>
    </div>
  )
}

export default About;