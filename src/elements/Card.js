import React from 'react'

const Card = ({imageText, h1Text, bgImage}) => {
  return (
    <div className='relative hover:opacity-80 shadow-md transition-all cursor-pointer w-full h-full p-4 rounded backdrop-blur-lg'>
        <div className={`${bgImage} w-full h-5/6 bg-cover bg-center`}>
                
                <h1 className='flex justify-center items-center h-full font-bold titlecase text-lg sm:text-2xl text-white'>{imageText}</h1>
        </div>
        <div>
                <h1 className='text-center sm:text-xl text-sm'>{h1Text}</h1>
        </div>
    </div>
  )
}

export default Card