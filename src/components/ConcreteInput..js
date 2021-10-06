import React from 'react'

const ConcreteInput = (props) => {
  return (
    <div className="my-2 px-2">

      <div className="flex h-16 items-center cursor-pointer" onClick={() => { props.onChangeMaterial(null) }}>
        <img src="images/concrete_logo.jpg" className="h-full w-auto" alt="cement" />
        <span className="mx-4 text-2xl font-bold">Concrete</span>
      </div>

      <div className="flex justify-between items-center my-2">
        <label className="text-base md:text-lg">Please fill in the information</label>
        <button type="button" className="cement_input_submit" onClick={() => { alert('Coming soon...') }} >
          Submit
        </button>
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          1. Current cement kg/m<sup>3</sup> of concrete:
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          2. Expected cement kg/m<sup>3</sup> of concrete:
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          3. Admixture in litre per m<sup>3</sup> of concrete:
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          4. Current cement cost per ton (USD):
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          5. Current Admixture cost per ton (USD):
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          6. Current Aggregates cost per m<sup>3</sup> (USD):
        </label>
        <input type="text" className="cement_input_value" />
      </div>

      <div className="grid grid-cols-3 my-4">
        <label className="col-span-3 md:col-span-2 text-lg text-left">
          7. Total concrete production m<sup>3</sup> per year:
        </label>
        <input type="text" className="cement_input_value" />
      </div>

    </div>
  )
}

export default ConcreteInput