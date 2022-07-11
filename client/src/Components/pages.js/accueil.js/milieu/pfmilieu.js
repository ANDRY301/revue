import React from 'react';
import './milieu.css';
import axios       from'axios';
import FileDowload from  "js-file-download";
import { Link }    from 'react-router-dom';

export default function Pfmilieu({
    numero_article = "",
    titre          ="",
    name_images    =""

}) {

    const Dowload_fichier =(e)=>{
        axios({
            url:`${process.env.REACT_APP_URL_DOWLOAD_ARTC}/${name_images}`, 
            method :"GET",
            responseType :"blob"
        }).then ( (res)=>{
            FileDowload(res.data,"etudes decoloniales.pdf")
        })
    }

  return (
      <>
          <Link className='box_thematique_varia' to={`/affichage_pdf/${name_images}`}>
              <div className='numero_titre'>
                  <span className='numero_artc'>{numero_article}</span>
                  <span> :{titre} </span> <h3>....</h3>
              </div>

              <div className='icon_pdf_milieu' onClick={Dowload_fichier}>
                  <i className="fab fa-battle-net"></i>
                  <span className='pdf_nom_milieu'>pdf</span>
              </div>
          </Link>
      </>
  )
}
