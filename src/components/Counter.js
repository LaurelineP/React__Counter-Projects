import React, { useState } from 'react';

const Counter = ( { init }) => {
  const [ count, setCount ] = useState( init ? init : 0 );

  const increment = () => setCount( count => count + 1 );
  const decrement = () => count !== 0 ? setCount( count => count - 1 ) : count;
  return (
    <div className = "card">
      <p className="result">{count}</p>
      <div className = "buttons-container">
        <button onClick = { increment }>+</button>
        <button onClick = { decrement }>-</button>
      </div>
    </div>
  )
}

export default Counter;