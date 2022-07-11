import React  from 'react'
import Droite from '../../pages.js/accueil.js/droite/droite'
import Gauche from '../../pages.js/accueil.js/gauche/gauche'

export default function Contact() {
  return (
    <div className='accueil_container'>
      <Gauche />
      <div>
        <span>Mail  :</span>
        <span>reseau.etudes.decoloniales@gmail.com</span>
      </div>
      <Droite />
    </div>
  )
}
