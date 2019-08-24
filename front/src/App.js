import React, { Component } from 'react';
import './style/App.css';
import Header from './containers/common/header';
import Body from './containers/common/body';
import SideTab from './containers/common/sideTab';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideTab />
        <Body />
      </div>
    );
  }
}

export default App;