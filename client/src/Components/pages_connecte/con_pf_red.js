import React, { useState } from 'react';
import axios from 'axios';

export default function Con_pf_red({
  id         ="",
  titre      ="",
  nom_table  ="",
  numero_red ="" 
}) {

    const [update_titre,setUpdate_titre] = useState('') ;

    const Supression = (id_) => {
        axios.delete(`${process.env.REACT_APP_URL_RACINE}/${nom_table}/${id_}`).then((response) => {
        }).then((res) => {
            window.location.reload();
        }).catch((err) => {
            console.log(err)
        });

    }

    const Update_titre = (id) => {
        axios.put(`${process.env.REACT_APP_URL_RACINE}/${nom_table}`, {
            id: id,
            titre: update_titre
        }).then((res) => {

            window.location.reload();
        }).catch((err) => {
            console.log(err)
        });

    }
  return (
      <div className='pf_container_con'>
          <div className='delete_pf'>
              <span>{numero_red}</span>
          </div>
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
