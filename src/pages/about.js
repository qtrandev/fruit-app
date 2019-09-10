import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class about extends Component {
  render() {
    return (
      <div className="about-pane">
        <h2>About Page</h2>

        <p>This is the fruit app.</p>

        <Link to="/">
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </Link>
      </div>
    )
  }
}

export default about
