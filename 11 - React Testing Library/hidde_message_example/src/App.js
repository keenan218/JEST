import React from 'react';
import logo from './logo.svg';
import './App.css';
import HiddenMessage from './HiddenMessage';

function App() {
  return (
    <div className="App">
      <HiddenMessage children={"Hellooooo"}/>
    </div>
  );
}

export default App;
