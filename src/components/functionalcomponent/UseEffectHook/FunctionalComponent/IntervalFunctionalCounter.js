import React, { useEffect, useState } from "react";

const IntervalFunctionalCounter = () => {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // function doSomething(someProps) {
    //   console.log(someProps);
    // }
    // doSomething();

    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    
  }, []);

  return (
    <div>
      <h1>Interval Functional Counter</h1>
      {count}
    </div>
  );
};

export default IntervalFunctionalCounter;
