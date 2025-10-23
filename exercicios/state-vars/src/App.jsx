import './App.css'
import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(10);

  function increaseBy(amount) {
    setNumber(prev => prev + amount);
  }

  return (
    <>
      <div>Value: {number}</div>
      <button onClick={() => increaseBy(-100)}>- 100</button>
      <button onClick={() => increaseBy(-1)}>- 1</button>
      <button onClick={() => increaseBy(100)}>+ 100</button>
      <button onClick={() => increaseBy(1)}>+ 1</button>
    </>
  );
}

export default App;

