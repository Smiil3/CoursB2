import { useState } from 'react'
import './Contact.css'  

function Contact() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='contact'>
      <div className='contactContainer'>
        <h2>Contactez-moi</h2>
        <p>Prenons contact pour travailler ensemble sur vos projets et créer quelque chose d’exceptionnel ! 🚀</p>

        <form className='contactForm'>
          <label>
            Nom:
            <input type="text" name="nom" placeholder="Votre nom" />
          </label>
          <label>
            Prénom:
            <input type="text" name="prenom" placeholder="Votre prénom" />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Votre email" />
          </label>
          <label>
            Objet:
            <input type="text" name="objet" placeholder="Objet du message" />
          </label>
          <label>
            Message:
            <textarea name="message" placeholder="Écrivez votre message ici..."></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact
