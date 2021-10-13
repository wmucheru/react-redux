import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/reducers/counter';

import './App.css'

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: { count }</h1>
      <button onClick={() => dispatch(increment()) }>Increment</button>
      <button onClick={() => dispatch(decrement()) }>Decrement</button>
    </div>
  );
}

export default App;
