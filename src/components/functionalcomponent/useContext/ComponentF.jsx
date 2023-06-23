import React from "react";
import { SkillContext, UserContext } from "./Context";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <SkillContext.Consumer>
              {(skill) => {
                return (
                  <div>
                    User context value {user}, {skill} Skill Context value
                  </div>
                );
              }}
            </SkillContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
export default ComponentF;
