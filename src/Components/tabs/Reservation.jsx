import React from 'react'
import CustomBtn from '../../elements/CustomBtn'
import Input from '../../elements/Input'

export default function Reservation() {
  return (
    <div className='p-4'>
        <div className='mb-4 sm:w-1/2 w-full'>
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
                label='Account Number'
                type='text'
                placeVal='999 999 999 99'
                />
                <Input
                label='Phone Number'
                type='text'
                placeVal='+234-765-332-22'
                />
        </div>
        <CustomBtn
        name='Make Reservation'
        />
    </div>
  )
}
