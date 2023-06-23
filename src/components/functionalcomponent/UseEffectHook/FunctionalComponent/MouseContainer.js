import React, { useState } from "react";
import FunctionalMouse from "./FunctionalMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      {display && <FunctionalMouse />}
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    </div>
  );
};

export default MouseContainer;
