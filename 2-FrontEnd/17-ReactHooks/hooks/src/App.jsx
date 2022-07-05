import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  if (count <= -1 ) { setCount(0) };
  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}
