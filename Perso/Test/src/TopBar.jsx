import { useState } from 'react'
import logo from './assets/logo.webp'
import './TopBar.css'

function TopBar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='topBar'>
        <img className='logoImg' src={logo}/>
    <p>V1.0</p>
    </div>
    </>
  )
}

export default TopBar
