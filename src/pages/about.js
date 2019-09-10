import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class about extends Component {
  render() {
    return (
      <div className="about-pane">
        <h2>About Page</h2>

        <p>This is the fruit app.</p>

        <Link to="/"><button>Home</button></Link>
      </div>
    )
  }
}

export default about
