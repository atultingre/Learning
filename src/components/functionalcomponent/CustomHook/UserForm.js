import React, { useState } from "react";
import useInput from "./hooks/useInput";

function UserForm() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);

    resetFirstName("");
    resetLastName("");
  };

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label htmlFor="Last Name">Last Name</label>
          <input type="text" {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
