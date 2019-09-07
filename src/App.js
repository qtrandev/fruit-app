import React from 'react';
import './App.css';
import ItemList from './ItemList';
import FruitMap from './FruitMap';

function App() {
  return (
    <div className="App">
      <div className="nav-list">
        <ItemList />
      </div>
      <div className="map-pane">
        <FruitMap />
      </div>
    </div>
  );
}

export default App;