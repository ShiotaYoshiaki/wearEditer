import React, { Component } from 'react';
import './style/App.css';
import AppTopBar from './containers/common/appBar';
import Header from './containers/common/header';
import Body from './containers/common/body';
import SideTab from './containers/common/sideTab';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppTopBar />
          <Header />
          <SideTab />
          <Body />
      </div>
    );
  }
}

export default App;