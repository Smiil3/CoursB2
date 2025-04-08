import { useState } from 'react';
import './Stories.css';
import profile1 from './assets/image5.webp';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import react from './assets/react.png';
import android from './assets/android.png';
import figma from './assets/figma.png';

function Stories() {
  const [stories, setStories] = useState([
    { id: 1, username: 'Mes Skills', image: profile1 },
    { id: 2, username: 'Html', image: html },
    { id: 3, username: 'Css', image: css },
    { id: 4, username: 'Js', image: js },
    { id: 5, username: 'React', image: react },
    { id: 6, username: 'Android Studio', image: android },
    { id: 7, username: 'Figma', image: figma }
  ]);

  return (
    <div className='stories-container'>
      {stories.map((story) => (
        <div key={story.id} className='story'>
          <div className='story-ring'>
            <img src={story.image} alt={story.username} className='story-icon' />
          </div>
          <p className='story-username'>{story.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
