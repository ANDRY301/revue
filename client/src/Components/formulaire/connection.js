import React ,{useState,useContext}from 'react';
import './inc.css';
import axios             from 'axios';
import { useHistory }    from 'react-router';
import { Les_data }      from '../context/nom_context';


export default function Connection() {


    
let history = useHistory() ;

const data ={
    username  :'',
    password  :'' 
}

        const [info,setInfo]           = useState(data) ;
        const {stateAuth,setstateAuth} = useContext(Les_data) ;
        const [message,setmessage]     = useState('') ;
        
        console.log(stateAuth)
        
    const handlechanchenge=(e)=>{
        setInfo({...info, [e.target.id]:e.target.value })
    }

    const Connection = () => {
    
        const { username, password } = info
        axios.post(`${process.env.REACT_APP_URL_CONNECTION}`, {
            username: username,
            password: password
        }).then((response) => {
            console.log("ato le cvonne")
            if (response.data.message) {
                setmessage(response.data.message);
            } else {
               console.log("connection etablie")
                localStorage.setItem('accessToken', response.data.token)
                setstateAuth({ status: true })
                history.push('/')

            }
        })
    }
console.log("https://gadana.dev301.com/deco/get_varia")
    const {username,password} = info ;
    const Btn_envoyer = username === '' || password === '' ?
        <div className='btn_lr'>
            <span className='btn_text_envoyer_inc'>Envoyer</span>
            <span><i className="far fa-paper-plane"></i></span>
        </div>
        :
        <div className='btn_lr' onClick={Connection} >
            <span className='btn_text_envoyer_inc'>Envoyer</span>
            <span><i className="far fa-paper-plane"></i></span>
        </div>

  return (
    <div className='container_parent'>
          <div className='img_log_reg_container_lr'>
          <div className='titre_inc_lr'>
              <span>Connection</span>
          </div>
          <div>
              <div className='box_nom_et_input'>
                  <div className='nom_input_lr'>
                      <span>Nom</span>
                  </div>
                  <div className="container_recherche_inc">
                      <input  name="name" autoComplete="off" required type="text" className="container_input_inc" placeholder='Nom' id="username" onChange={handlechanchenge} />
                      <label for="name" className="recherche_name_inc" >
                          <span className="recontent-span_inc" ><i className="fas fas fa-user-tie"></i> </span>
                      </label>
                  </div>
              </div>
              <div className='box_nom_et_input'>
                  <div  className='nom_input_lr'>
                      <span>Mot de passe</span>
                  </div>
                  <div className="container_recherche_inc">
                      <input  name="name" autoComplete="off" type="password" required className="container_input_inc" placeholder='Mot de passe' id="password" onChange={handlechanchenge} />
                      <label for="name" className="recherche_name_inc" >
                          <span className="recontent-span_inc" > <i className="fas fa-lock"></i> </span>
                      </label>
                  </div>
              </div>
          </div>
          {Btn_envoyer}
          <div className='cont_alert'>
              <span className='alerte'>{message}</span>
          </div>
      </div>
    </div>
  )
}
