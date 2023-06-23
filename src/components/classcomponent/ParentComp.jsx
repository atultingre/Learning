import React, { PureComponent } from "react";
// import RegularComp from "./RegularComp"
// import PureCompo from "./PureCompo"
import MemoComp from "./MemoComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Atul",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Atul",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component render");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name}/>
        <PureCompo name={this.state.name}/> */}
      </div>
    );
  }
}
export default ParentComp;
