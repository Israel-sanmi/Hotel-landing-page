import React from 'react'
import CustomBtn from '../elements/CustomBtn'
import NavBar from './NavBar'

const Section = () => {
  return (
    <div className="w-full h-screen bg-hero-img bg-cover bg-center">
    
    <NavBar/>
        <div className='h-[80%] flex items-center justify-center'>
          <div className='text-center text-white uppercase sm:w-3/4 lg:w-2/4 bg-black/60 p-8 lg:rounded-lg'>
              
              <h1 className='text-4xl font-bold'>Best Hotel in Nigeria</h1>
              <p className='text-xl sm:text-5xl font-bold sm:font-extrabold py-2'>A 5-star Multipurpose Hotel</p>
              <h3 className='p-2 font-bold'>Comfort is Our Priority</h3>
              <CustomBtn
              name='Start'
              />
              
          </div>
        </div>
    </div>
  )
}

export default Section