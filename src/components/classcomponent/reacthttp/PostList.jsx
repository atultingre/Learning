import axios from "axios";
import React,{Component} from "react";

class PostList extends Component{
  constructor(props){
    super(props)

    this.state = {
      posts: [],
      error: []
    }
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=> {
      // console.log(response.data)
      this.setState({
      posts: response.data 
    })})
    .catch((error)=> {
      console.log(error)
    this.setState({errorMsg: 'Error reterving data'})
    }
          )
  }
  
  render(){
    const {posts, errorMsg} = this.state
    return(
      <div>
        List of Post
        {
          posts.length ? (
          posts.map((post) => 
        <div key={post.id}>{post.title}</div>)
        ) : (<div>No posts available</div>
         )}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  };
};
export default PostList;