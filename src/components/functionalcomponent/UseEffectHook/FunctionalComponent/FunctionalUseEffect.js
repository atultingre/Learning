import React from "react";
import FunctionalCounterEffect from "./FunctionalCounterEffect";
// import FunctionalMouse from "./FunctionalMouse";
import MouseContainer from "./MouseContainer";
// import IntervalFunctionalCounter from "./IntervalFunctionalCounter";
import DataFetching from "./DataFetching";
import GetPostById from "./GetPostById";

const FunctionalUseEffect = () => {
  return (
    <div>
    <GetPostById/>
      {/* <IntervalFunctionalCounter /> */}
      <hr />
      <MouseContainer />
      <hr />
      <FunctionalCounterEffect />
      {/* <hr /> */}
      {/* <FunctionalMouse /> */}
      <hr />
      <DataFetching />
    </div>
  );
};

export default FunctionalUseEffect;
