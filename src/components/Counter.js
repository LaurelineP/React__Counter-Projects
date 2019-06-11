import React, { useState } from 'react';

const Counter = () => {
  const [ count, setCount ] = useState(0);

  const increment = () => setCount( count => count + 1 );
  const decrement = () => count !== 0 ? setCount( count => count - 1 ) : count;
  return (
    <div className = "card">
      <p className="result" data-testid="resultInit" >{count}</p>
      <div className = "buttons-container">
        <button onClick = { increment }>+</button>
        <button onClick = { decrement }>-</button>
      </div>
    </div>
  )
}

export default Counter;