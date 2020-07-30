import React from 'react';
import '../css/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display item="aviones" />
      <ButtonPanel />
    </div>
  );
}

export default App;
