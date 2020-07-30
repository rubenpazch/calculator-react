import React from 'react';
import '../css/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

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
