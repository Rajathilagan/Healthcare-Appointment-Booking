import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-600'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Niroggyan is a healthcare technology company dedicated to making healthcare transparent, accessible, and efficient for everyone. At the heart of our mission is empowering patients with the knowledge and tools they need to make informed decisions about their health.</p>
          <p>Founded with a vision to simplify complex health data, Niroggyan bridges the gap between patients, healthcare providers, and medical institutions. Whether it's finding trusted doctors, booking appointments, or understanding medical reports, we ensure a seamless digital experience tailored to every user’s needs.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To revolutionize healthcare access by creating a seamless, trusted, and user-friendly platform where patients can easily connect with qualified doctors, schedule appointments effortlessly, and receive timely care — empowering every individual to take control of their health with confidence and convenience.</p>
        </div>
      </div>
      <div className='text-xl my-4'> 
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheluling fits into busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Covenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommentation and reminders to help you stay on top of your health</p>
        </div>
      </div>
    </div>
  )
}

export default About
