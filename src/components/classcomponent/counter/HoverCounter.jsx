import React from "react";
import useCounter from "../counter/withCounter";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>{this.props.name} Hover {count} times</h2>
    </div>
  );
};

export default useCounter(HoverCounter);
