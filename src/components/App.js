import React from 'react';
import '../css/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <div className="calculatorWrapper">
        <Display item="aviones" />
        <ButtonPanel color="#f5913e" wide="true" />
      </div>
    </div>
  );
}

export default App;
