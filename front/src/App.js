import React, { Component } from 'react';
import './style/App.css';
import Counter from './containers/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;