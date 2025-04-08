import { useState } from 'react'
import './App.css'  


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <form className='contactForm'>
      <label>
        Nom:
        <input type="text" name="nom" />
      </label>
      <label>
        Prénom:
        <input type="text" name="prenom" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Objet:
        <input type="text" name="objet" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Envoyer</button>
      </form>
    </>
  )
}

export default function ConditionalContact() {
    if (visibility) {
      return <Contact />;
    } else {
      return null;
    }
  }
