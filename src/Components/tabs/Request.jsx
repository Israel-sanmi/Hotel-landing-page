import React from 'react'
import CustomBtn from '../../elements/CustomBtn'
import Input from '../../elements/Input'

export default function Request() {
  return (
    <div>
        <div className='sm:w-1/2 w-full p-4'>
            <Input 
            label='E-mail'
            type='E-mail'
            placeVal='israel.sanmi@gmail.com'
            />
        </div>
        <CustomBtn
        name='request Information'
        />
    </div>
  )
}
