import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './NavBar.jsx'
import TopBar from './TopBar.jsx'
import Post from './Post.jsx'
import Stories from './Stories.jsx';
import Profile from './Profile.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar />
    <Profile />
    <NavBar />
  </StrictMode>,
)
