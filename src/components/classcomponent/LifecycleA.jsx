import React,{Component} from "react";
import LifecycleB from "./LifecycleB"
class LifecycleA extends Component{
  constructor(){
    super()

    this.state = {
      name: "Atul"
    }
    console.log("LifecycleA constructor")
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifecycleA getDerivedStateFromProps")
    return null;
  }

  componentDidMount(){
    console.log("LifecycleA componentDidMount")
  }

  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(){
    console.log("LifecycleA componentDidUpdate"); 
  }

  changeState = () =>{
    this.setState({
      name: "Tingre"
    })
  }
  render(){
    console.log("LifecycleA render")
    
    return(
      <div>
      <div> Lifecycle A</div>
        <button onClick={this.changeState}>Change</button>
      <LifecycleB/>
      </div>
    )
  };
};

export default LifecycleA;