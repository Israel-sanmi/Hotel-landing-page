import React from 'react'
import { Link } from 'react-router-dom'
import CustomBtn from '../elements/CustomBtn'
import Input from '../elements/Input'

export default function Login() {
  return (
    <>
        <Link to='/'><h1 className='text-lg font-bold uppercase text-white bg-stone-500'>Home</h1></Link>
        <div className='bg-stone-800 h-screen w-full flex justify-center'>
        <div className='sm:w-1/2 w-full m-2 flex flex-col justify-center items-center h-[80%] text-center gap-4 '>
            <Input
            label='E-mail'
            type='email'
            placeVal='israel.sanmi@gmail.com'
            />
            <Input
            label='Password'
            type='password'
            placeVal='Input passcode'
            />
            <CustomBtn
            name='Login'
            />
        </div>
    </div>
    </>
  )
}
