import React, { useState }  from 'react'
import Block_formulaire     from '../formulaire/block_formulaire';
import Con_acceuil          from './con_acceuil'

export default function Debut_connecte() {
  
    const [mettre_a_jour,setMettre_a_jour] = useState(true) ;
    const [inscription,setInscription]     = useState(false) ;

    const affiche_mettre_a_jour = () => {
        setMettre_a_jour(true);
        setInscription(false);
        window.location.reload();
    }

    const affiche_inscription =()=>{
        setInscription(true) ;
        setMettre_a_jour(false);
    }

  return (
      <div>
          <div className='cont_lien'>
              <div className='lien_inc_supr' onClick={affiche_mettre_a_jour}>
                  <span>mettre a jour</span>
              </div>
              <div className='lien_inc_supr' onClick={affiche_inscription}>
                  <span>Inscription</span>
              </div>
          </div>
          {mettre_a_jour && <Con_acceuil />}
          {inscription   && <Block_formulaire />}
       
      </div>
  )
}
