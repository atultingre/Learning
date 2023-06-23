import React,{Component} from "react";

class EventBind extends Component{
  constructor(props){
    super(props)

    this.state={
      message: "Hello Atul"
    }
    
    // Binding in Class Constructor *React document Suggest this method best option
    // this.clickHandler = this.clickHandler.bind(this)
  }
  
    // clickHandler (){
    //   this.setState({
    //     message: "Bye Atul"
    //   })
    //   console.log(this);
    //   console.log("Clicked Button");
    // };

  // class Property Arrow Function *React document Suggest this method
    clickHandler = () => {
      this.setState({
        message: "Bye Atul"
      })
      console.log(this);
      console.log("Clicked Button");
    };
  
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        {/* Binding in Render *NOt use because Performance Issue */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button>  */}
        {/* Arrow Function in Render */}
        {/* <button onClick={()=>this.clickHandler()}>Click Me</button> */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  };
};

export default EventBind;