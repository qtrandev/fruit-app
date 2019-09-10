import React, { Component } from 'react'
import ItemList from '../ItemList';
import FruitMap from '../FruitMap';
import { Link } from 'react-router-dom';

class home extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-list">
          <ItemList />
          <Link to="/about"><button>About</button></Link>
        </div>
        <div className="map-pane">
          <FruitMap />
        </div>
      </div>
    )
  }
}

export default home
