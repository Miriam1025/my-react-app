import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
    </div>
  );
}

export default Counter;
