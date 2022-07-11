import React from 'react';
import './accueil.css' ;
import Droite           from './droite/droite';
import Gauche           from './gauche/gauche';
import Milieu           from './milieu/milieu';


export default function Accueil(props) {

  return (
    <div className='accueil_container'>
      <Gauche />
       <div className='container_milieu'>
      <Milieu/>
       </div>
      <Droite />
    </div>
  )
}
