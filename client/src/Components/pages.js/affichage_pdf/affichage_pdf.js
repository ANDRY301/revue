import React ,{ useState}   from 'react';
import './affichage_pdf.css';
import { useParams }     from 'react-router-dom';
import axios             from'axios';
import FileDowload       from  "js-file-download";
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import Gauche            from '../accueil.js/gauche/gauche';
import Droite            from '../accueil.js/droite/droite';

export default function Affichage_pdf() {

    const nom_article = useParams() ;
    const name_images  = nom_article.name_images ;

  const [numPages, setNumPages] = useState(null);
  
  const URL = `${process.env.REACT_APP_URL_GET_ARTICLE}/${name_images}`
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
console.log(URL)
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
    <div className='PDF_container'>
      <Gauche />
      <div className='container_affiche_pdf'>
        <div className='btn_dowload' onClick={Dowload_fichier}>
          <i className="far fa-file-pdf"></i>
          <span className='nom_enregistrement_pdf'>Pdf</span>
        </div>
        <Document file={URL}
          onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                height="1200"
                width="760"

                key={`page_${index + 1}`}
                pageNumber={index + 1}
                className="ulr_page"
              />
            )
          )}
        </Document>
      </div>
      <Droite />
    </div>
  )
}
