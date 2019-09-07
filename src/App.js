import React from 'react';
import './App.css';
import ItemList from './ItemList';
import FruitMap from './FruitMap';

function App() {
  return (
    <div className="App">
      <h1>Fruits App</h1>
      <h2>
        <ItemList />
      </h2>
      <FruitMap />
    </div>
  );
}

export default App;