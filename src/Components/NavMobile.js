import React from 'react'
import { Link } from 'react-router-dom'
import {Close} from '@material-ui/icons'

const NavMobile = ({openClick, active}) => {
  
  return (
    <div>
       <nav className='flex fixed inset-0 bg-stone-50/10 justify-center items-center left-1/4 backdrop-blur-md z-50 text-center'>
          <ul className='uppercase flex flex-col gap-12 items-center'>
            <Close onClick={openClick}
            className='text-red-500'
            />
              <li><Link to='/'>pricing</Link></li>
              <li><Link to='/'>testimonies</Link></li>
              <li><Link to='/'>clients</Link></li>
              <li><Link to='/'>works</Link></li>
              <li><Link to='/'>about</Link></li>
              <li><Link to='/login'>login</Link></li>
          </ul>
        </nav> 
    </div>
  )
}

export default NavMobile