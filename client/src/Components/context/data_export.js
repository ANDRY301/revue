


import { useEffect, useState } from 'react';
import axios from 'axios';
export const Total_data = () => {

    const [appel_en_cours,setAppel_en_cours]           = useState([]);
    const [recensions,setRecensions]                   = useState([]);
    const [numero_thematique,setNumero_thematique]     = useState([]);
    const [varia,setVaria]                             = useState([]);
    const [selection_total_red,setselection_total_red] = useState([])   
                 
    const [stateAuth,setstateAuth] = useState({username :"",id:0,status:false}) ;

    useEffect(() => {
     
      axios.get(`${process.env.REACT_APP_URL_AUTH}`,{
        headers: { accessToken: localStorage.getItem("accessToken") }

      })
       .then((response) => {
        console.log(response)
        if (response.data.error) {
          setstateAuth({ username: '', id: 0, status: false })
        } else {
          setstateAuth({
            username: response.data.username,
            id: response.data.id,
            status: true
          })
        }
      
      }).catch((err) => {
        console.log(err)
      })
        //  RECENSIONS GET
        axios.get(`${process.env.REACT_APP_URL_RECENSION}`)
            .then((res) => {
                setRecensions(res.data);
            })
                    //  APPELS EN COURS  GET 
        axios.get(`${process.env.REACT_APP_URL_APPELS_EN_COURS}`)
            .then((res) => {
                setAppel_en_cours(res.data);
            })
        //  NUMERO THEMATIQUE GET
        axios.get(`${process.env.REACT_APP_URL_NUMERO_THEMATIQUE}`)
            .then((res) => {
                setNumero_thematique(res.data);
            })
        // VARIA  GET
        axios.get(`${process.env.REACT_APP_URL_VARIA}`)
            .then((res) => {
                setVaria(res.data);
            })
            
              // selection_total_red
        axios.get(`${process.env.REACT_APP_URL_TOTAL_RED}`)
        .then((res) => {
            setselection_total_red(res.data);
        })

            
    }, [])

    return { appel_en_cours, recensions, numero_thematique, varia , stateAuth,setstateAuth,selection_total_red}
}
