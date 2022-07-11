import React, { useContext } from 'react';
import './milieu.css';
import Pfmilieu     from './pfmilieu';
import { Les_data } from '../../../context/nom_context';

export default function Milieu() {
    
const {numero_thematique ,varia } = useContext(Les_data) ;

const Liste_thematique = numero_thematique.map( (item,index)=>{
    return(
            <Pfmilieu
            key={index}
            titre          = {item.titre}   
            numero_article = {item.numero_article}        
            name_images    = {item.name_images}
            />
    )
})

const Liste_varia = varia.map( (item,index)=>{
    return(
        <Pfmilieu
        key={index}
        titre          = {item.titre}   
        numero_article = {item.numero_article}        
        name_images    = {item.name_images}
        />

    )
})
  return (
      <div className='container_milieu'>
          <div className='titre_milieu'>
              <span>dernier numéro actuel</span>
          </div>

          <div className='container_bloc_milieu'>
              <div className='titre_milieu_numero'>
                  <span> numéro 6 : REVUE D'ÉTUDES DÉCOLONIALES</span>
              </div>
              <div>
                  <div className='container_thematique_varia'>
                      <div className='titre_thematique_varia'>
                          <span >Numéro Thématique : Études et pratiques décoloniales</span>
                      </div>
                      {Liste_thematique}
                  </div>

                  <div className='container_thematique_varia'>
                      <div className='titre_thematique_varia'>
                          <span >Varia</span>
                      </div>
                      {Liste_varia}
                  </div>
              </div>
          </div>
      </div>
  )
}
