import { useState } from 'react'
import './Post.css'
import post1 from './assets/post1.webp'
import profileIcon from './assets/logoGite.webp'
import logoUnimeet from './assets/logoUnimeet.png'
import logoCoktail from './assets/logoCocktail.png'
import logoHumadentaire from './assets/logoHumadentaire.jpeg'
import logoExodrift from './assets/logoExodrift.png'
import exodrift from './assets/exodrift.png'
import humadentaire from './assets/humadentaire.png'
import gite from './assets/gite.png'
import cocktail from './assets/cocktail.png'
import unimeet from './assets/unimeet.png'
import bellIcon from './assets/image4.webp'
import shareIcon from './assets/image3.webp'

function Post() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='postType'>
          <a href="https://smiil3.github.io/SiteVitrineB2/galerie.html" target="_blank">
          <div className='postHeader'>
              <img src={logoCoktail} className='icon profileImage' alt="Vite logo" />
              <p>Cocktail Glouglou</p>
          </div>
          <img src={cocktail} className='imagePost' alt="" />
          <div className='postFooter'>
              <img src={bellIcon} className="love" alt="" />
              <img src={shareIcon} className="love" alt="" />
          </div>
          </a>
      </div>
      <div className='postType'>
          <a href="https://giteopallinois.fr" target="_blank">
          <div className='postHeader'>
              <img src={profileIcon} className='icon profileImage' alt="Vite logo" />
              <p>Gîte O Pallinois</p>
          </div>
          <img src={gite} className='imagePost' alt="" />
          <div className='postFooter'>
              <img src={bellIcon} className="love" alt="" />
              <img src={shareIcon} className="love" alt="" />
          </div>
          </a>
      </div>
      <div className='postType'>
          <a href="https://eliott-colin.github.io/Unimeet_website/" target="_blank">
          <div className='postHeader'>
              <img src={logoUnimeet} className='icon profileImage' alt="Vite logo" />
              <p>Unimeet</p>
          </div>
          <img src={unimeet} className='imagePost' alt="" />
          <div className='postFooter'>
              <img src={bellIcon} className="love" alt="" />
              <img src={shareIcon} className="love" alt="" />
          </div>
          </a>
      </div>
      <div className='postType'>
          <a href="https://web.archive.org/web/20240828034654/https://humadentaire.fr/" target="_blank">
          <div className='postHeader'>
              <img src={logoHumadentaire} className='icon profileImage' alt="Vite logo" />
              <p>Humadentaire</p>
          </div>
          <img src={humadentaire} className='imagePost' alt="" />
          <div className='postFooter'>
              <img src={bellIcon} className="love" alt="" />
              <img src={shareIcon} className="love" alt="" />
          </div>
          </a>
      </div>
      <div className='postType'>
          <a href="https://eliott-colin.itch.io/exodrift  " target="_blank">
          <div className='postHeader'>
              <img src={logoExodrift} className='icon profileImage' alt="Vite logo" />
              <p>Humadentaire</p>
          </div>
          <img src={exodrift} className='imagePost' alt="" />
          <div className='postFooter'>
              <img src={bellIcon} className="love" alt="" />
              <img src={shareIcon} className="love" alt="" />
          </div>
          </a>
      </div>
    </>
  )
}

export default Post
