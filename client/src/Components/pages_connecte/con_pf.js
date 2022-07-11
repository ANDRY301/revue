import React, { useState } from 'react';
import axios from 'axios';

export default function Con_pf({
  id        ="",
  titre     ="",
  nom_table =""
}) {

  const [update_titre,setUpdate_titre] = useState('') ;

  const Supression = (id_) => {
    axios.delete(`${process.env.REACT_APP_URL_RACINE}/${nom_table}/${id_}`).then((response) => {
    }).then((res) => {
      console.log("bien effacer partie front ") ;
      window.location.reload();
    })
  }

  const Update_titre = (id) => {
    axios.put(`${process.env.REACT_APP_URL_RACINE}/${nom_table}`, {
        id: id,
        titre: update_titre
    }).then((res) => {
        console.log(res.data) ;
        window.location.reload();
    }).catch((err) => {
        console.log(err)
    });

}
  return (
    <div className='pf_container_con'>
      <div className='titre_pf'>
        <span>{titre}</span>
      </div>
      <div className='milieu_pf'>
        <div>
          <input placeholder='mettre a jour' onChange={(e) => { setUpdate_titre(e.target.value) }} />
        </div>
        <div className='deco_btn' onClick={() => { Update_titre(id) }}>
          <span>Update</span>
        </div>
      </div>
      <div className='delete_pf' onClick={() => { Supression(id) }}>
      <i className="fas fa-trash"></i>
      </div>
    </div>
  )
}
