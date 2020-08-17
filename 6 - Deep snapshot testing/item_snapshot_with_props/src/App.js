import React from 'react';
import './App.css';
import Items from './Items';

class App extends React.Component {
  render() {
    const items = [
      'Shark',
      'Dolphin',
      'Octopus'
    ];
    return (
      <Items items={items} />
    );
  }
}

export default App;