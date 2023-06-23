import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
