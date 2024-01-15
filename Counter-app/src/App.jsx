// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state={
      count:0
    }
  }

  // incrementing(){
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }

  decrement(){
    this.setState({
      count: this.state.count-1
    })
  }

  resethere(){
    this.setState({
      count: 0
    })
  }

  incrementing(){
    this.setState((prevState)=>({
      count:prevState.count+1
    }))
  }

  render() {
    return (
      <div>
          <div id="countthis">
            Count = {this.state.count}
          </div>

          <button onClick={()=>this.incrementing()}>
             Add +
          </button>

          <button onClick={()=>this.resethere()}>
            Reset
          </button>

          <button onClick={()=>this.decrement()}>
            Sub -
          </button>

        </div>
    )
  }
}



