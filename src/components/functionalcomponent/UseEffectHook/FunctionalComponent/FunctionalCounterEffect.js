import React, { useEffect, useState } from "react";

const FunctionalCounterEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updating Functional component Title")
    document.title = `Functional Clicked ${count} times`;
  },[count]);

  return (
    <div>
      <h1>Functional Counter Effect</h1>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
    </div>
  );
};

export default FunctionalCounterEffect;
