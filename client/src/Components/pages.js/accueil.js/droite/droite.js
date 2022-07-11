import React, { useEffect, useState } from 'react';
import './droite.css';
import axios    from 'axios';
import Pfdroite from './pfdroite';

export default function Droite() {

    const [liste_red_numero,setliste_red_numero] = useState([]) ;

    useEffect( ()=>{
        axios.get(`${process.env.REACT_APP_URL_QUE_NUMERO}`)
        .then( (res)=>{
               setliste_red_numero(res.data);
        })
      },[])

    const Liste_gauche_appel_en_cours_red1 = liste_red_numero.map((item, index) => {
        return (
            <Pfdroite key={index}
                numero_red  = {item.numero_red}
            />
        )

    })
   
  return (
      <div className='droite_container_gauche_droite'>
          <div className='droite_box_bloc'>
              {Liste_gauche_appel_en_cours_red1}
          </div>
      </div>
  )
}
