import React, { useContext, useState } from 'react';
import './connecte.css'
import { Les_data } from '../context/nom_context';
import Con_pf       from './con_pf';
import Con_pf_red   from './con_pf_red';

export default function Con_acceuil() {

  const {appel_en_cours ,recensions,numero_thematique ,varia ,selection_total_red} = useContext(Les_data) ;

  const [affiche_gauche,setAffiche_gauche]                   = useState(true) ;
  const [affiche_milieu,setAffiche_milieu]                   = useState(true) ;
  const [affiche_selection_total_red,setSelection_total_red] = useState(true);

  const Con_gauche_recensions = recensions.map( (item,index)=>{
    return(
     <Con_pf
      key = {index}
      id        = {item.id}
      titre     = {item.titre}
      nom_table = "recensions"
     />
    )
  })

  const Con_gauche_appel_en_cours = appel_en_cours.map( (item,index)=>{
    return(
     <Con_pf
      key = {index}
      id        = {item.id}
      titre     = {item.titre}
      nom_table = "appels_en_cours"
     />
    )
  })

  const Con_numero_thematiques = numero_thematique.map( (item,index)=>{
    return(
     <Con_pf
      key = {index}
      id        = {item.id}
      titre     = {item.titre}
      nom_table = "numero_thematique"
     />
    )
  })

  const Con_milieu_varia = varia.map( (item,index)=>{
    return(
     <Con_pf
      key = {index}
      id        = {item.id}
      titre     = {item.titre}
      nom_table = "varia"
     />
    )
  })

const Con_selection_total_red = selection_total_red.map( (item,index)=>{
  return(
   <Con_pf_red
    key        = {index}
    id         = {item.id}
    titre      = {item.titre}
    numero_red = {item.numero_red}
    nom_table  = "red"
   />
  )
})

  const func_gauche=()=>{
    setAffiche_gauche(!affiche_gauche)
  }

  const func_milieu =()=>{
    setAffiche_milieu(!affiche_milieu)
  }

  const func_red =()=>{
    setSelection_total_red(!affiche_selection_total_red)
  }

  const Tete_titre =
    <div className='pf_container_con'>
      <div className='titre_pf1'>
        <span>titre</span>
      </div>
      <div className='milieu_pf1'>
        <span>mettre a jour</span>
      </div>
      <div className='delete_pf1'>
        <span>delete</span>
      </div>
    </div>

  const Tete_titre_red =
    <div className='pf_container_con'>
      <div className='delete_pf1'>
        <span>N° Red</span>
      </div>
      <div className='titre_pf1'>
        <span>titre</span>
      </div>
      <div className='milieu_pf1'>
        <span>mettre a jour</span>
      </div>
      <div className='delete_pf1'>
        <span>delete</span>
      </div>
    </div>

  const GAUCHE_AFF = affiche_gauche ?
    <div className='container_recen_thema'>
      <div className='bloc_cont'>
        <div className='titre_con'>
          <span >Recensions</span>
        </div>
        {Tete_titre}
        {Con_gauche_recensions}
      </div>

      <div className='bloc_cont'>
        <div className='titre_con'>
          <span>appel en cours</span>
        </div>
        {Tete_titre}
        {Con_gauche_appel_en_cours}
      </div>
    </div>
    :
    <div></div>

  const MILIEU_AFF = affiche_milieu ?
    <div className='container_recen_thema'>
      <div className='bloc_cont'>
        <div className='titre_con'>
          <span > numero thematiques</span>
        </div>
        {Tete_titre}
        {Con_numero_thematiques}
      </div>
      <div className='bloc_cont'>
        <div className='titre_con'>
          <span>Varia</span>
        </div>
        {Tete_titre}
        {Con_milieu_varia}
      </div>
    </div>
    :
    <div></div>
    

  const DROITE_RED = affiche_selection_total_red ?
   
      <div className='bloc_cont_red'>
        <div className='titre_con'>
          <span > Red</span>
        </div>
        {Tete_titre_red}
        {Con_selection_total_red}
      </div>
    :
    <div></div>
  
  return (
    <>
      
      <div className='block_connecte'>
        <div className='grand_titre_connecte' onClick={func_gauche} >
          <span >GAUCHE</span>
        </div>
        {GAUCHE_AFF}
      </div>

      <div className='block_connecte'>
        <div className='grand_titre_connecte' onClick={func_milieu} >
          <span >milieu</span>
        </div>
        {MILIEU_AFF}
      </div>


      <div className='block_connecte'>
        <div className='grand_titre_connecte' onClick={func_red} >
          <span>RED</span>
        </div>
        {DROITE_RED}
      </div>
    </>
  )
}
