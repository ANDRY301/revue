import React,{useMemo} from 'react';
import './premier.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import { Les_data }       from './context/nom_context';
import { Total_data }     from './context/data_export';
import NavBar             from './nav_bar/navBar'
import Footer             from './footer/footer';
import Accueil            from './pages.js/accueil.js/accueil';
import Affichage_pdf      from './pages.js/affichage_pdf/affichage_pdf';
import Contact            from './nav_bar/contact/contact';
import Presentation_revue from './pages.js/presentation_revue/presentation_revue';
import Connection         from './formulaire/connection';
import Debut_connecte     from './pages_connecte/debut_connecte';
import Page_not_found     from './page_not_found';


export default function Premier() {



  const {appel_en_cours ,recensions ,numero_thematique,varia,selection_total_red,stateAuth,setstateAuth}= Total_data();
  const premier_memo = useMemo( ()=>(
    {appel_en_cours,recensions,numero_thematique,varia,selection_total_red,stateAuth,setstateAuth}),
    [appel_en_cours,recensions,numero_thematique,varia,selection_total_red,stateAuth,setstateAuth]); 

const Accueil_connecte = stateAuth.status ? 

<Route path='/'  exact component={Debut_connecte} />
 :  
 <Route path='/' exact component={Accueil} /> 
  return (
    <>
      <Les_data.Provider value={premier_memo}>
        <Router>
          <div className='contanier_premier'>
            <div>
              <NavBar />
              <Switch>
              {Accueil_connecte}
                <Route path='/contact'                    exact component={Contact} />
                <Route path='/presentation_revue'         exact component={Presentation_revue} />
                <Route path='/affichage_pdf/:name_images' exact component={Affichage_pdf} />
                <Route path='/connection'                 exact component={Connection} />
                <Route path='/*'                          exact component={Page_not_found} />               
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Les_data.Provider>
    </>
  )
}
