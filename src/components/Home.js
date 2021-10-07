import React, { useState, useEffect } from 'react';
import CementInput from './CementInput';
import ConcreteInput from './ConcreteInput.';
import { Material } from '../utils/constants';
import Output from './Output';
import Choose from './Choose';

const Home = () => {
  const [materialType, setMaterialType] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsSubmitted(false)
  }, [materialType])

  const onMaterialChange = (material) => {
    setMaterialType(material)
  }

  const onSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="w-full md:max-w-5xl p-2 md:p-6">
      
      {/*
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
      </div> */}
     
      { materialType === Material.Cement &&
        <CementInput onChangeMaterial={onMaterialChange} onSubmit={onSubmit} />
      }
      { materialType === Material.Concrete &&
        <ConcreteInput onChangeMaterial={onMaterialChange} onSubmit={onSubmit} />
      }
      { !materialType && !isSubmitted &&
        <Choose onChangeMaterial={onMaterialChange} />      
      }
      { isSubmitted &&
        <Output /> 
      }
    </div>
  )
}

export default Home;