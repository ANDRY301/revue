import React,{useContext} from 'react';
import './navBar.css';
import {Link}         from "react-router-dom"; 
import img_bar        from '../images/logo_red.png';
import { Les_data }   from '../context/nom_context';
import { useHistory } from 'react-router-dom';

export default function NavBar() {

  let history = useHistory() ;

  const {stateAuth ,setstateAuth} = useContext(Les_data) ;

  const LougOut=()=>{   
    localStorage.removeItem("accessToken");
    setstateAuth({...stateAuth,status:false});
    window.location.reload();
    history.push('/') ;
}
  const decon_conect = stateAuth.status ? 
  <Link className='nav_contact_presentation' to='/connection' onClick={LougOut}>logout</Link>
  :
  <Link className='nav_contact_presentation' to='/connection'>Connexion</Link>

  return (
    <div className='container_nav'>
      <div className='nav_logos_text'>
        <div >
          <img
            src={img_bar}
            className='logos'
            alt='logos'
          />
        </div>
        <div>
          <Link className='link_no_decoration' to='/'>REVUE D'ÉTUDES DÉCOLONIALES ISSN 2551-5896</Link>
        </div>
      </div>

      <div className='nav_liste'>
        <div className='none_quand_petit'>
          <Link className='nav_contact_presentation' to='/contact'>Contact</Link>
        </div>
        <div className='none_quand_petit'>
          <Link className='nav_contact_presentation' to='/presentation_revue'>Présenation de la revue</Link>
        </div>
        <div>
          {decon_conect}
        </div>
      </div>
    </div>
  )
}
