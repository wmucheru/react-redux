import React from 'react';

import './App.css'

function App() {
  let [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Clicked { count } times</button>
    </div>
  );
}

export default App;
