import React, { Component } from 'react';
import './style/App.css';
import Header from './containers/common/header';
import Body from './containers/common/body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;