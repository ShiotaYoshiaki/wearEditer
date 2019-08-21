import React from 'react';

export default class Counter extends React.Component {
  render() {
    const { increment, decrement, counter } = this.props;
    return(
      <div>
        <h2>カウンター</h2>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <div>
          Count: {counter.count}
        </div>
      </div>
    )
  }
}