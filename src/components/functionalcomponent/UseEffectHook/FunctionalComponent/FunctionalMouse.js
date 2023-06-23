import React, { useEffect, useState } from "react";

const FunctionalMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event")
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);

    return ()=>{
      console.log("Component unmounting")
      window.removeEventListener("mousemove", logMousePosition)
    }
  }, []);
  return (
    <div>
      <h1>Functional Mouse Effects</h1>X - {x} Y - {y}
    </div>
  );
};

export default FunctionalMouse;
