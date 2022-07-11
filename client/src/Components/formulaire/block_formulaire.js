import React from 'react'
import Inc_appels_encours    from './inc_appels_encours'
import Inc_numero_thematique from './inc_numero_thematique'
import Inc_recensions        from './inc_recensions'
import Inc_red               from './inc_red'
import Inc_varia             from './inc_varia'

export default function Block_formulaire() {
  return (
    <div>
       <Inc_recensions/>
       <Inc_appels_encours/>
       <Inc_numero_thematique/>
       <Inc_varia/>
       <Inc_red inc_titre ="red"/>
    </div>
  )
}
