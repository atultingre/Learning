import React from "react";
import CounterOne from "./counter/CounterOne";
import CounterTwo from "./counter/CounterTwo";
import CounterThree from "./counter/CounterThree";
import FetchingDataOne from "./FetchingData/FetchingDataOne";
import FetchingDataTwo from "./FetchingData/FetchingDataTwo";

const UseReducer = () => {
  return (
    <div>
      <FetchingDataTwo />
      <hr />
      <FetchingDataOne />
      <hr />
      <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <CounterThree />
    </div>
  );
};

export default UseReducer;
