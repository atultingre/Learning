import React, { useContext } from "react";
import { CountContext } from "./UseReducerWithUseContext";
const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component A - {countContext.countState} &nbsp;
      <button onClick={() => countContext.countDispatch("Inc")}>
        Increment
      </button>&nbsp;
      <button onClick={() => countContext.countDispatch("Dec")}>
        Decrement
      </button>&nbsp;
      <button onClick={() => countContext.countDispatch("Reset")}>Reset</button>
    </div>
  );
};

export default ComponentA;
