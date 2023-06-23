import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { SkillContext, UserContext } from "./Context";

function ComponentE() {
  const user = useContext(UserContext);
  const skill = useContext(SkillContext);

  return (
    <div>
      <ComponentF />
      {user} - {skill}
    </div>
  );
}

export default ComponentE;
