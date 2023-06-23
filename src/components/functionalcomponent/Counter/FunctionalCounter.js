import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Functional Component Counter</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      &nbsp;&nbsp;&nbsp;
      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      &nbsp;&nbsp;&nbsp; */}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setCount((prevCount) => prevCount * 2)}>
        Multiplication
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default FunctionalCounter;
