import React from 'react';
import ComponentWithProps from './ComponentWithProps';

function App() {
  const props = {
    headerText: `A header`,
    contentText: `Some content`,
    numericProp: 100,
    expressionProp: 2 + 2,
    valueProp: 1000,
    objectProp: {
      key1: `key 1 value`,
      key2: 2,
      key3: [`Key 3`, `array`, `values`]
    },
    arrayProp: [1, 2, 3],
    functionProp: () => `Hello World`,
  }

  return (
    <div className="App">
      <ComponentWithProps {...props}/>
    </div>
  );
}

export default App;
