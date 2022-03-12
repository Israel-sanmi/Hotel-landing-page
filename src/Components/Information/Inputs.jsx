import React from 'react'
import Input from '../../elements/Input'
import CustomBtn from '../../elements/CustomBtn'
import SendMessgae from '../tabs/SendMessgae'
import Request from '../tabs/Request'
import Reservation from '../tabs/Reservation'
import { useState } from 'react'

export default function Inputs() {
  const [tab, setTab] = useState('sendMessage')
  return (
    <>
        <div className='md:flex block text-white p-4 gap-4'>
                <CustomBtn 
                name='send message'
                Clicker={()=>setTab('sendMessage')}
                />
                <CustomBtn 
                name='request information'
                Clicker={()=>setTab('request')}
                />
                <CustomBtn 
                name='make reservation'
                Clicker={()=>setTab('reserve')}
                />
        </div>
        <div className='flex flex-col'>
          {tab === 'sendMessage' && <SendMessgae/>}
          {tab==='request' && <Request/>}
          {tab=== 'reserve' && <Reservation/>}
        </div>
    </>
  )
}
