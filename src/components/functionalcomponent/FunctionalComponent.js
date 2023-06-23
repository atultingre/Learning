import React from "react";
import UseEffectHook from "./UseEffectHook/UseEffectHook";
import Counter from "./Counter/Counter";
import UseStateHook from "./UseStateHook/UseStateHook";
import Context from "./context/Context";
import UseContext from "./useContext/UseContext";
import UseReducer from "./UseReducer/UseReducer";
import UseReducerWithUseContext from "./UseReducerWithUseContext/UseReducerWithUseContext";
import UseCallbackHook from "./UseCallbackHook/UseCallbackHook";
import UseMemo from "./UseMemo/UseMemo";
import UseRef from "./UseRef/UseRef";
import CustomHook from "./CustomHook/CustomHook";

const FunctionalComponent = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CustomHook />
      {/* <hr />
      <UseRef /> */}
      {/* <hr />
      <UseMemo /> */}
      {/* <hr />
      <UseCallbackHook /> */}
      <hr />
      <UseReducerWithUseContext />
      {/* <hr />
      <UseReducer /> */}
      <hr />
      <UseContext />
      {/* <hr />
      <UseEffectHook /> */}
      {/* <hr />
      <UseStateHook /> */}
      <hr />
      <Counter />
    </div>
  );
};

export default FunctionalComponent;
