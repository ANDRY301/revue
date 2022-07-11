import React, { useContext } from 'react';
import './gauche.css';
import Pfgauche_droite from './pfgauche_droite';
import { Les_data }    from '../../../context/nom_context';


export default function Gauche() {

    const {appel_en_cours ,recensions } = useContext(Les_data) ;

    const Liste_gauche_recensions = recensions.map((item, index) => {
        return (
            <Pfgauche_droite key={index}
            titre        = {item.titre}
            name_images  = {item.name_images}
            />
        )

    })
    const Liste_gauche_appel_en_cours = appel_en_cours.map((item, index) => {
        return (
            <Pfgauche_droite key={index}
            titre        = {item.titre}
            name_images  = {item.name_images}
            />
        )

    })
  return (
      <div className='container_gauche_droite'>
          <div className='box_bloc'>
              <span>Appel en cours</span>
              {Liste_gauche_appel_en_cours}
          </div>

          <div className='box_bloc'>
              <span>Recensions</span>
              {Liste_gauche_recensions}
          </div>
      </div>
  )
}
