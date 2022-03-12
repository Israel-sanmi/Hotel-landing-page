import React from 'react'

const Input = ({label, type, placeVal}) => {
  return (
    <div className='w-full'>
      <label className='text-white uppercase text-bold'>{label}</label>
      <input type={type} placeholder={placeVal} className='w-full p-2 text-slate-100 outline-none border-2 bg-transparent' />
    </div>
  )
}

export default Input