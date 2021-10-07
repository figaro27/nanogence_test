import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CementInput from './CementInput';
import ConcreteInput from './ConcreteInput.';
import { Material } from '../utils/constants';
import Choose from './Choose';

const Home = () => {
  const [materialType, setMaterialType] = useState(null)

  return (
    <BrowserRouter>
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

        <Switch>
          <Route path='/cement'>
            <CementInput />
          </Route>
          <Route path='/concrete'>
            <ConcreteInput />
          </Route>   
          <Route path='/'>
            <Choose />      
          </Route>         
        </Switch>   

      </div>
    </BrowserRouter>
  )
}

export default Home;