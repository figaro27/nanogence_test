import React from 'react'
import { Link } from "react-router-dom";

const Choose = (props) => {
  return (
    <div className="grid gap-6 grid-cols-2">
      <div className="choose_item">
        <Link to="/cement">
          <img src="images/cement_logo.jpg" className="px-16 py-4" alt="cement" />
          <div className="choose_item_text">
            <span className="m-2 md:m-4 text-2xl">Cement</span>
            <span className="text-lg">(Clinker producer, distributor, retailor)</span>
          </div>
        </Link>
      </div>
      <div className="choose_item">
        <Link to="/concrete">
          <img src="images/concrete_logo.jpg" className="px-16 py-4" alt="cement" />
          <div className="choose_item_text">
            <span className="m-2 md:m-4 text-2xl">Concrete</span>
            <span className="text-lg">(RMX, Precast, Drycast, mortar )</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Choose