import React, { createContext } from "react";
import ComponentC from "./ComponentC";

export const UserContext = createContext();
export const SkillContext = createContext();
function Context() {
  return (
    <div>
      <UserContext.Provider value={"Atul"}>
        <SkillContext.Provider value={"JavaScript"}>
          <ComponentC />
        </SkillContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
export default Context;
