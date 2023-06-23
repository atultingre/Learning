

import React,{Component} from "react";

class UserGreeting extends Component{
  constructor(){
    super()

    this.state = {
      isLoggedIn: false
    }
  }

  
  
  render(){
  // let message;
  //   if(this.state.isLoggedIn){
  //     return(
  //     <div>Welcome Atul</div>
  //     )
  //   }else{
  //     return(
  //       <div>Welocme Guest</div>
  //     )
  //   }
  //   return <h1>{message}</h1>
    
    // if(this.state.isLoggedIn){
    //   return (
    //   <div>Welcome Atul</div>
    //   )
    // }else{
    //   return(
    //     <div>Welocme Guest</div>
    //   )
    // }
    // return(
      // this.state.isLoggedIn ?<div>Welcome Atul</div>:<div>Welocme Guest</div>
    // )
      return this.state.isLoggedIn && <div>Welcome Atul</div>
  };
};

export default UserGreeting;