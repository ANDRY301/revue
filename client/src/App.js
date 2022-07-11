import React from 'react';
import './App.css';
import Premier        from './Components/premier';

export default function App() {
//  REMARQUE pas oublier ajouter /site_paul quand c 'est dans le serveur 
// meme choge pour le get static pour afficher le pdf
  return (
    <div className='container_app'>
      <Premier />
    </div>
   
  )
}

