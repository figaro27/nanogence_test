import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CementInput from './CementInput';
import ConcreteInput from './ConcreteInput.';
import Choose from './Choose';

const Home = () => {
  return (
    <BrowserRouter>
      <div className="w-full md:max-w-5xl p-2 md:p-4">
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