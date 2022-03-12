import React from 'react'
import Input from '../../elements/Input'
import CustomBtn from '../../elements/CustomBtn'


export default function SendMessgae() {
  return (
  <>
    <div className='sm:w-1/2 w-full p-6'>
            <div className='mb-4'>
                <Input
                label='Name'
                type='text'
                placeVal='Israel A.'
                />
                <Input
                label='E-mail'
                type='email'
                placeVal='israel.sanmi@gmail.com'
                />
                <Input
                label='Message'
                type='text'
                placeVal='Give update on our services...'
                />
            </div>
                <CustomBtn
                name='Send Message' />
        </div>
        
    </>
  )
}
