import React, { useState } from "react";

const useCounter = (WrappedComponent) => {
  const WithCounter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...this.props}
      />
    );
  };

  return WithCounter;
};

export default useCounter;
