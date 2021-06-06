import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const handler = () => setCounter(prevValue => prevValue + 1);

useEffect(() => {
  alert('Hello')
}, []);

  return (
    <div>
      <div>Licznik</div>
      <button onClick={handler}>Change state</button>
      <div >
        <h1>
          <p>{counter}</p>
        </h1>

      </div>
    </div>
  );
}

export default App;
