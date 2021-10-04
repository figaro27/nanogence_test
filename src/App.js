import React from 'react';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-bar py-2 px-4 md:px-24">
        <div className="flex text-lg md:text-3xl items-center text-white">App name/logo</div>
        <img src="images/nanogence_logo.png" className="hidden md:block" alt="company logo" />
      </div>
      <div className="flex w-full justify-center">
        <Home />
      </div>
    </div>
  );
}

export default App;
