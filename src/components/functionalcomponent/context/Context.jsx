import React, { Component } from "react";
import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";

class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <UserProvider value="Atul">
          <ComponentC />
        </UserProvider>
      </div>
    );
  }
}
export default Context;
