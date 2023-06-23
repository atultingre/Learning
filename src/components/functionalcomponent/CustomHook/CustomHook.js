import React from "react";
import DocTitleTwo from "./title/DocTitleTwo";
import DocTitleOne from "./title/DocTitleOne";
import CounterOne from "./counter/CounterOne";
import CounterTwo from "./counter/CounterTwo";
import UserForm from "./UserForm";

function CustomHook() {
  return (
    <div>
      <h1>Custom Hook</h1>
      <UserForm />
      <CounterOne />
      <CounterTwo />
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default CustomHook;
