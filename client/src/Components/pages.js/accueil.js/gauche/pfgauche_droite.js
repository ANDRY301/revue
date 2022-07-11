import React from 'react';
import './gauche.css';
import axios       from 'axios'
import FileDowload from "js-file-download";
import { Link }    from 'react-router-dom';


export default function Pfgauche_droite({
    titre        ="",
    name_images  = ""
    
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
      <div className='lien_article'>
          <Link className='titre_artc' to={{ pathname: `/affichage_pdf/${name_images}`}} >{titre}</Link>
             <div className='icon_pdf_milieu' onClick={Dowload_fichier}>
            <i className="far fa-file-pdf"></i>
            <span className='pdf_nom_milieu'>pdf</span>
        </div>
      </div>
  )
}
