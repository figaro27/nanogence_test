import React, { useState, useEffect } from 'react';
import CementInput from './CementInput';
import ConcreteInput from './Concrete.';
import Output from './Output';

const Home = () => {
  const [isCement, setIsCement] = useState(true)

  const onToggleChange = () => {
    setIsCement(!isCement)
  }

  return (
    <div className="w-full md:max-w-5xl p-2 md:p-6">
      <div className="w-full flex justify-between items-center px-2">
        <div className="flex">
          <label className="switch">
            <input type="checkbox" onChange={onToggleChange} defaultChecked={isCement} />
            <div className="slider round">
              <span className="on">Cement</span>
              <span className="off">Concrete</span>
            </div>
          </label>
        </div> 
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white text-xl py-1.5 px-4 border border-gray-400 rounded shadow" onClick={() => { alert('Hello world!') }} >
          Submit
        </button>
      </div>
     
      { isCement &&
        <CementInput />
      }
      { !isCement &&
        <ConcreteInput />
      }
      <Output /> 
    </div>
  )
}

export default Home;