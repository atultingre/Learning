import React, { useState } from "react";

function useCounter(initialCount=0, value) {
  const [count, setCounter] = useState(initialCount);

  const increment = () => {
    setCounter((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCounter((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCounter(initialCount);
  };
  return [count, increment, decrement, reset, initialCount];
}

export default useCounter;
