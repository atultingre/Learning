// Class Component

import React,{Component} from "react";

class ClassClick extends Component{
  constructor(props){
    super(props)

    this.state = {
      
    }
  }
  
  render(){
    return(
      <div>
      </div>
    )
  };
};
export default ClassClick;

// Pure Component

import React,{PureComponent} from "react";

class ClassClick extends PureComponent{
  constructor(props){
    super(props)

    this.state = {
      
    }
  }
  
  render(){
    return(
      <div>
      </div>
    )
  };
};

export default ClassClick;

// Function Component
import React from "react";

const FunctionClick = () => {

  return (
    <div>
    </div>
  )
}

export default FunctionClick