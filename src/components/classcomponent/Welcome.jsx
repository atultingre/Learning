import React,{Component} from "react"

class Welcome extends Component{
  render(){
    
  const {name, city} = this.props
  return(
    <div>
      <h1>Hello {name}, <br></br> where are you from ? {city}</h1>
    </div>
  )
  }
}

export default Welcome