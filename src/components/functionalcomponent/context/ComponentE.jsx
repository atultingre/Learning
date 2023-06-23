import React,{Component} from "react";
import ComponentF from "./ComponentF";
import UserContext  from "./userContext";

class ComponentE extends Component{
  constructor(props){
    super(props)

    this.state = {
      
    }
  }

  static contextType = UserContext
  
  render(){
    return(
      <div>Component E context {this.context}
        <ComponentF/>
      </div>
    )
  };
};

// ComponentE.contextType = UserContext
export default ComponentE;