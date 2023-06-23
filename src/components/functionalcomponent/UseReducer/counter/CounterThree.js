import React, { useReducer } from "react";
import CounterTwo from "./CounterTwo";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialValue;
    default:
      return state;
  }
};
const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Multiple Reducer using useReducer</h1>
      <h1>Count - {count}</h1>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
      <h1>Count - {countTwo}</h1>
      <button onClick={() => dispatchTwo("Increment")}>Increment</button>
      <button onClick={() => dispatchTwo("Decrement")}>Decrement</button>
      <button onClick={() => dispatchTwo("Reset")}>Reset</button>
    </div>
  );
};

export default CounterThree;
