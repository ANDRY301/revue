import React, { useEffect, useState } from 'react';
import  '../gauche/gauche.css';
import axios    from 'axios';
import { Link } from 'react-router-dom';

export default function Pfdroite({
    numero_red          = '',
}) {
  const [liste_red,setListe_red] = useState([]) ;
  
  useEffect( ()=>{
    axios.get(`${process.env.REACT_APP_URL_GET_RED}/${numero_red}`)
    .then( (res)=>{
           setListe_red(res.data);
    })
  })

  const map_liste_red = liste_red.map( (item,index)=>{
    return(
      <div key={index}>
        <Link className='droite_titre_artc'to={{ pathname: `/affichage_pdf/${item.name_images }` }} >
          {item.titre}
        </Link>
      </div>
    )
  })

  return (
    <div className='droite_lien_article'>
      <div className='droite_titre_text_box' >
       <span>{numero_red}</span>
      </div>
      {map_liste_red}
    </div>
  )
}
