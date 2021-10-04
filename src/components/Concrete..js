import React from 'react'

const ConcreteInput = (props) => {
  return (
    <div className="my-4 px-2">
      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Cost of different raw materials (per ton)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Expected cement reduction - same for SCMs, admixture (%)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Expected increase in aggregates (%)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Dosage (%)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Total volume produced per year (ton)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

    </div>
  )
}

export default ConcreteInput