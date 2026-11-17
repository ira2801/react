import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter: {count}</h2>
      <button type="button" onClick={() => setCount(previous => previous + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCount(previous => previous - 1)}>
        Decrease
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
      {count < 0 && <p role="status">Counter can't be negative</p>}
    </section>
  );
}

export default Counter;
