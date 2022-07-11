import React  from 'react'
import Droite from '../accueil.js/droite/droite'
import Gauche from '../accueil.js/gauche/gauche'

export default function Presentation_revue() {
  return (
    <div className='accueil_container'>
      <Gauche />
      <div>
        <span>En cours ...</span>
      </div>
      <Droite />
    </div>
  )
}
