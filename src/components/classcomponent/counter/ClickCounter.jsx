import React from "react";
import HoverCounter from "./HoverCounter";
import useCounter from "../counter/withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <HoverCounter name="Atul"/>
      <button onClick={incrementCount}>{this.props.name}  Clicked {count} times</button>
    </div>
  );
};

export default useCounter(ClickCounter);
