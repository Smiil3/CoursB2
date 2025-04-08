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
       <a href='http://localhost:4000/'> <img src={homeIcon} className='icon' alt="Vite logo" /></a>
       <a href=''> <img src={searchIcon} className='icon' alt="Vite logo" /></a>
       <a href='http://localhost:4002/'> <img src={plusIcon} className='icon' alt="Vite logo" /></a>
       <a href=''> <img src={bellIcon} className='icon' alt="Vite logo" /></a>
       <a href='http://localhost:4004'> <img src={profileIcon} className='icon' alt="Vite logo" /></a>
    </div>
    </>
  )
}

export default NavBar
