import React from 'react'

const CementInput = (props) => {

  const onSubmit = () => {
    props.onSubmit()
  }

  return (
    <div className="my-2 px-2">

      <div className="flex h-16 items-center cursor-pointer" onClick={() => { props.onChangeMaterial(null) }}>
        <img src="images/cement_logo.jpg" className="h-full w-auto" alt="cement" />
        <span className="mx-4 text-2xl font-bold">Cement</span>
      </div>

      <div className="flex justify-between items-center my-2">
        <label className="text-base md:text-lg">Please fill in the information</label>
        <button type="button" className="cement_input_submit" onClick={onSubmit} >
          Submit
        </button>
      </div>
      
      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          1. Current clinker (%):
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          2. Expected clinker (%):
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          3. Grinding Aid dosing in Litre per tons:
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          4. Current clinker cost per tons (USD):
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          5. Current Grinding Aid cost per ton (USD):
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          6. Total clinker production tons per year:
        </label>
        <input type="text" className="cement_input_value" />
      </div>

    </div>
  )
}

export default CementInput