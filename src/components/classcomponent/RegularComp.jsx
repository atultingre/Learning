import React,{Component} from "react";

class RegularComp extends Component{
  constructor(props){
    super(props)

    this.state = {
      
    }
  }
  
  render(){
    console.log("Regular Component render")
    return(
      <div>
        Regular Component {this.props.name}
      </div>
    )
  };
};
export default RegularComp;