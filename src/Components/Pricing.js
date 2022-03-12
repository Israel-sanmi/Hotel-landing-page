import React from 'react'
import Card from '../elements/Card'

const Pricing = () => {
  return (
    <div className='w-full h-screen grid place-items-center gap-3 lg:grid-cols-2 bg-sub-img bg-cover bg-center'>
        <Card 
        h1Text='See More'
        imageText='Lounge'
        bgImage='bg-sub-img'
        />
        <Card 
        h1Text='See More'
        imageText='Bar & Restaurant'
        bgImage='bg-hero-img'
        />
        <Card 
        h1Text='See More'
        imageText='Swimming Pool'
        bgImage='bg-max-img'
        />
        <Card 
        h1Text='See More'
        imageText='Executive Size Rooms'
        bgImage='bg-sub-img'
        />
        
    </div>
  )
}

export default Pricing