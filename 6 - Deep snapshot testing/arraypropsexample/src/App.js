import React from 'react';
import ComponentWithProps from './ComponentWithProps';
import NumberPropComponent from './NumberPropComponent';

function App() {
  const props = {
    // headerText: "Hello my friends",
    arrayProp: [1, 2, 3],
  }
  return (
    <div className="App">
      <ComponentWithProps {...props}/>
      <NumberPropComponent numericprop={1000}/>
    </div>
  );
}

export default App;
