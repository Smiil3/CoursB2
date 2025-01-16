import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './NavBar.jsx'
import TopBar from './TopBar.jsx'
import Post from './Post.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar />
    <div className='scroll'>
      <Post /> 
      <Post /> 
      <Post /> 
    </div>
    <NavBar />
  </StrictMode>,
)
