import React, { Component } from 'react';
import './style/App.css';
import Counter from './containers/Counter';
import Header from './containers/common/header';
import ItemList from './containers/inventory/itemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ItemList />
        <Counter />
      </div>
    );
  }
}

export default App;