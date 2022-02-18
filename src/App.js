import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './redux/reducers/counter';
import { getPeople } from './redux/reducers/swapi';

import Todos from './pages/Todos';
import Swapi from './pages/Swapi';

import './stylesheets/App.css';

function App() {
  const { count } = useSelector((state) => state.counter);
  // const { people } = useSelector((state) => state.people);
  const dispatch = useDispatch();

  // console.log(people)

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [])

  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-2">
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
          <h4>Count: { count }</h4>
          <hr />
        </div>

        <div className="col-sm-5">
          <Todos />
        </div>

        <div className="col-sm-5">
          <Swapi />
        </div>
      </div>
    </div>
  );
}

export default App;
