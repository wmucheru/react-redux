import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/reducers/counter';
import { getPeople } from './redux/reducers/swapi';

import './stylesheets/App.css'

function App() {
  const { count } = useSelector((state) => state.counter);
  const { people } = useSelector((state) => state.people);
  const dispatch = useDispatch();

  console.log(people)

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [])

  return (
    <div className="App">
      <h1>Count: { count }</h1>
      <button onClick={() => dispatch(increment()) }>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
      
      <h1>PEOPLE</h1>
      {

      }
    </div>
  );
}

export default App;
