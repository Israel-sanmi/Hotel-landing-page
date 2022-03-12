import React from 'react'

const CustomBtn = ({name, Clicker}) => {
  return (
    <div>
        <button onClick={Clicker}
        className='sm:px-12 px-4 sm:py-3 py-1 animate-pulse rounded uppercase text-white sm:font-bold font-normal sm:text-sm  bg-gray-400/25'
        >{name}</button>
    </div>
  )
}

export default CustomBtn