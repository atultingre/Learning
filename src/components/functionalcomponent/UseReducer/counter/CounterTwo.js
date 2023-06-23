import React, { useReducer } from "react";

const initialValue = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "Decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "Increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "Decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "Reset":
      return initialValue;
    default:
      return state;
  }
};
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>useReducer Counter complex state</h1>
      <h1>Count - {count.firstCounter}</h1>
      <h1>Count - {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "Decrement", value: 5 })}>
        Decrement 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
          Increment counter 2
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
          Decrement counter 2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};

export default CounterTwo;
