import React, { Component } from 'react'

export default class ClassCounterEffect extends Component {
    constructor(props){
        super(props)

        this.state ={
            count: 0,
            name: ""
        }
    }

    componentDidMount(){
        document.title = `Class Clicked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps, prevState){
      if (prevState.count != this.state.count) {
        console.log('Updating Class Component document title')
      }
        document.title = `Class Clicked ${this.state.count} times`
    }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Class Counter Effects</h1>
        <input type="text" onChange={(e)=> this.setState( {name: e.target.value})}/>
        <button onClick={()=> this.setState({count: count + 1})}>Click {count}</button>
      </div>
    )
  }
}
