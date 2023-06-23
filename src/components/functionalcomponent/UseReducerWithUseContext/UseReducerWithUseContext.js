import React, { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = createContext();

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Inc":
      return state + 1;
    case "Dec":
      return state - 1;
    case "Reset":
      return initialValue;
    default:
      return state;
  }
};

const UseReducerWithUseContext = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}>
      <div>
        <h1>useReducer With useContext</h1>
      <h1>Counter - {count}</h1>

        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
};

export default UseReducerWithUseContext;
