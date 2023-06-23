import React from "react";
import ClassUseEffect from "./ClassComponent/ClassUseEffect";
import FunctionalUseEffect from "./FunctionalComponent/FunctionalUseEffect";

const UseEffectHook = () => {
  return (
    <div>
      <FunctionalUseEffect/>
      <hr />
      <ClassUseEffect/>
    </div>
  );
};

export default UseEffectHook;
