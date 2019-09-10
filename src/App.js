import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//Pages
import home from './pages/home';
import about from './pages/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home}></Route>
        <Route exact path="/about" component={about}></Route>
      </Switch>
    </Router>
  );
}

export default App;