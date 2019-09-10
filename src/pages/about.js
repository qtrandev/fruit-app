import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class about extends Component {
  render() {
    return (
      <div className="about-pane">
        <h2>About Page</h2>

        <p>This is the fruit app.</p>

        <Link to="/"><Button variant="contained" color="primary">Home</Button></Link>

        <h3>Attributions:</h3>
        <p><div>Icons (mango,durian,rambutan) made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></p>
        <p><div>Icons (custard apple) made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></p>
        <p><div>Icons (lychee) made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></p>
      </div>
    )
  }
}

/* Fruit direct icon images
mango: https://image.flaticon.com/icons/svg/700/700804.svg
durian: https://image.flaticon.com/icons/svg/765/765534.svg
lychee: https://image.flaticon.com/icons/svg/575/575451.svg
rambutan: https://image.flaticon.com/icons/svg/1155/1155280.svg
custard apple: https://image.flaticon.com/icons/svg/1899/1899230.svg
*/

export default about
