import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.react';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
