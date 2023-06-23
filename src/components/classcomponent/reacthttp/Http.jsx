import React,{Component} from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

class Http extends Component{
  constructor(props){
    super(props)

    this.state = {
      
    }
  }
  
  render(){
    return(
      <div>
        <PostForm/>
        <PostList/>
      </div>
    )
  };
};
export default Http;