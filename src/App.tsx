import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <span>exemple compteur react toolkit</span>
          <Counter/>
      </header>
    </div>
  );
}

export default App;
