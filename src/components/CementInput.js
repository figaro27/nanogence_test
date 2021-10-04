import React from 'react'

const CementInput = (props) => {
  return (
    <div className="my-4 px-2">
      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Cost of cement/COGS, of additives, fly ash (per ton)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Percentage of clinker used
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Expected reduction of clinker (%)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Expected increase in SCMs (%)
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          Expected grinding reduction (%)
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

export default CementInput