import { useState } from 'react'
import homeIcon from './assets/image.webp'
import searchIcon from './assets/image2.webp'
import plusIcon from './assets/image3.webp'
import bellIcon from './assets/image4.webp'
import profileIcon from './assets/image5.webp'
import './Navbar.css'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar'>
        <img src={homeIcon} className='icon' alt="Vite logo" />
        <img src={searchIcon} className='icon' alt="Vite logo" />
        <img src={plusIcon} className='icon' alt="Vite logo" />
        <img src={bellIcon} className='icon' alt="Vite logo" />
        <img src={profileIcon} className='icon' alt="Vite logo" />
    </div>
    </>
  )
}

export default NavBar
