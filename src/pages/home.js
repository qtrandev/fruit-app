import React, { Component } from 'react'
import ItemList from '../ItemList';
import FruitMap from '../FruitMap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class home extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-list">
          <ItemList />
          <Link to="/about"><Button variant="contained" color="default">About</Button></Link>
        </div>
        <div className="map-pane">
          <FruitMap />
        </div>
      </div>
    )
  }
}

export default home
