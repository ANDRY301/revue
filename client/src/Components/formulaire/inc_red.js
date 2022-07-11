

import React, { useState } from 'react';
import axios from 'axios';
import './inc.css'

export default function Inc_red({
    milieu_post ="post_red",
    inc_titre   =""
}) {

    const data ={
        numero_red     :'',
        titre          :'',
      }

      const [info,setInfo] = useState(data) ;
      const [confirmation,setAlerteerror] = useState('') ;
      const [img, setimg] = useState(null);

      const handlechanchenge=(e)=>{
        setInfo({...info, [e.target.id]:e.target.value })
    }
    
    const handleFileSelect = (event) => {
        setimg(event.target.files[0])
      }
  
    const Add_numero_badget =()=>{
        const {numero_red,titre} = info ;
        const formData = new FormData();
        formData.append("avatar", img);
        formData.append("numero_red", numero_red);
        formData.append("titre", titre);

        axios.post(`${process.env.REACT_APP_URL_RACINE}/${milieu_post}`,formData)
       .then( (response)=>{
          setAlerteerror(response.data)
          setInfo({...data}) ;
          if(response.data.message){
            setAlerteerror(response.data.message)
          }}).catch ( (err)=>{
              console.log(err)
          })
      }
      
    const { numero_red, titre } = info ;

    const Btn_envoyer = titre === '' ||  numero_red === '' ?
        <div className='btn_lr'>
            <span>Envoyer</span>
            <span><i className="far fa-paper-plane"></i></span>
        </div>
        :
        <div className='btn_lr' onClick={Add_numero_badget}>
            <span>Envoyer</span>
            <span><i className="far fa-paper-plane"></i></span>
        </div>

  return (
      <div className='container_parent'>
          <div className='img_log_reg_container_lr'>
              <div className='titre_inc_lr'>
                  <span>{inc_titre}</span>
              </div>
              <div>
                  <div className='box_nom_et_input'>
                      <div className='nom_input_lr'>
                          <span>Numéro</span>
                      </div>
                      <div className="container_recherche_inc">
                          <input name="name" autoComplete="off" type="numero_red" required className="container_input_inc" placeholder='nom de lien pdf' id="numero_red" onChange={handlechanchenge} value={numero_red} />
                          <label for="name" className="recherche_name_inc" >
                              <span className="recontent-span_inc" ><i className="fas fas fa-user-tie"></i> </span>
                          </label>
                      </div>
                  </div>

                  <div className='box_nom_et_input'>
                      <div className='nom_input_lr'>
                          <span>Titre</span>
                      </div>
                      <div className="container_recherche_inc">
                          <input name="name" autoComplete="off" type="titre" required className="container_input_inc" placeholder='titre' id="titre" onChange={handlechanchenge} value={titre} />
                          <label for="name" className="recherche_name_inc" >
                              <span className="recontent-span_inc" ><i className="fas fas fa-user-tie"></i> </span>
                          </label>
                      </div>
                  </div>
             
                  <div>
                  <input type="file" onChange={handleFileSelect}/>
                  </div>
              </div>
              {Btn_envoyer}
              <div className='cont_alert'>
                  <span >{confirmation}</span>
              </div>
          </div>
      </div>
  )
}

