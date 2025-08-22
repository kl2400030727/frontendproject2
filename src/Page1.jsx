import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class 
 extends Component {
  render() {
    return (
      <div>
        <h1>India is my country</h1>
        <br/><br />
        <Link to="/Page2">Go To Page2</Link>
         <br/><br />
        <Link to="/Page3">Go To Page3</Link>
        <br/><br/>
        <Link to="/Page4">Go To Page4</Link>
        <br/><br/>
      </div>
    )
  }
}
