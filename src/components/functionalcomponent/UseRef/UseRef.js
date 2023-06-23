import React, { useEffect, useRef } from "react";
import HookTimer from "./HookTimer";

const UseRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    //Focus the input element
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>useRef Hook</h1>
      <input type="text" ref={inputRef} />

      <HookTimer />
    </div>
  );
};

export default UseRef;
