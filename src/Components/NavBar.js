import React, { useState } from 'react'
import {MenuOutlined} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import NavMobile from './NavMobile'

const NavBar = () => {
  const [active, setactive] = useState(false)

  function openClick(){
    setactive(prevOpen=>!prevOpen)
  }
  return (
    <div className='flex justify-between items-center p-4'>
        <span className='uppercase font-bold text-4xl select-none text-blue-600'>JungleBlue</span>
        <nav>
          <ul className='lg:flex hidden uppercase gap-8 font-medium text-white'>
              <li><Link to='/'>pricing</Link></li>
              <li><Link to='/'>testimonies</Link></li>
              <li><Link to='/'>clients</Link></li>
              <li><Link to='/'>works</Link></li>
              <li><Link to='/'>about</Link></li>
              <li><Link to='/login'>login</Link></li>
          </ul>
        </nav>

          {active && <NavMobile 
          openClick={openClick}
          active={active}
          />}

        <div className='flex lg:hidden cursor-pointer scale-150 text-white'>
          <MenuOutlined
          onClick={openClick}
          />
        </div>
    </div>
  )
}

export default NavBar