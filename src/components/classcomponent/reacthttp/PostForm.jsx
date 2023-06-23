import axios from "axios";
import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: "",
      title: "",
      body: ""
    }
  }

  changeHandler = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state)

    axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  render() {
    const { userId, title, body } = this.state
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div>
            <input type="text" value={userId} name="userId" onChange={this.changeHandler} placeholder="User ID"/>
          </div>
          <div>
            <input type="text" value={title} name="title" onChange={this.changeHandler} placeholder="Title"/>
          </div>
          <div>
            <input type="text" value={body} name="body" onChange={this.changeHandler} placeholder="Body"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    )
  };
};
export default PostForm;