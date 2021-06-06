import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handler = () => setCounter(prevValue => prevValue + 1);

  return (
    <div>
      <div>Licznik</div>
      <button onClick={handler}>Change state</button>
      <div >
        <h1>
          <p1>{counter}</p1>
        </h1>

      </div>
    </div>
  );
}

export default App;
