import React, { useState } from "react";

const UseStateWithObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  
  return (
    <div>
      <h1>useState Hook with Object</h1>
      <input
        type="text"
        name={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        name={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <h1>This is first Name - {name.firstName}</h1>
      <h1>This is first Name - {name.lastName}</h1>
    </div>
  );
};

export default UseStateWithObject;
