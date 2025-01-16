import { useState } from 'react'
import './Post.css'
import post1 from './assets/post1.webp'
import profileIcon from './assets/logoGite.webp'
import bellIcon from './assets/image4.webp'

function Post() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='postType'>
        <div className='postHeader'>
            <img src={profileIcon} className='icon' alt="Vite logo" />
            <p>Username</p>
        </div>
        <img src={post1} alt="" />
        <div className='postFooter'>
            <img src={bellIcon} alt="" />
        </div>
    </div>
    </>
  )
}

export default Post
