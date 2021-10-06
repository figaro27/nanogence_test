import React from 'react'
import { Material } from '../utils/constants'

const Choose = (props) => {
  return (
    <div className="grid grid-cols-2">

      <div className="choose_item" onClick={() => { props.onChangeMaterial(Material.Cement) }}>
        <img src="images/cement_logo.jpg" className="px-16 py-4" alt="cement" />
        <div className="choose_item_text">
          <span className="m-2 md:m-4 text-2xl">Cement</span>
          <span className="text-lg">(Clinker producer, distributor, retailor)</span>
        </div>
      </div>

      <div className="choose_item" onClick={() => { props.onChangeMaterial(Material.Concrete) }}>
        <img src="images/concrete_logo.jpg" className="px-16 py-4" alt="cement" />
        <div className="choose_item_text">
          <span className="m-2 md:m-4 text-2xl">Concrete</span>
          <span className="text-lg">(RMX, Precast, Drycast, mortar )</span>
        </div>
      </div>

    </div>
  )
}
export default Choose