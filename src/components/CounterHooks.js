import React, { useState, useEffect } from "react";

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  useEffect(() => {
    alert(`You're using React Hooks!`);
  });

  return (
    <div>
      <h1>Counter Hooks</h1>
      <p>You clicked {count} times!</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
};

export default CounterHooks;
