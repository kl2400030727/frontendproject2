import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import'./css/Page2.css'

export default class Page2 extends Component {
  render() {
    return (
      <div className='Page2'>
       
    <h1>Welcome to page2 of front end project</h1>
    <br/><br />
    <div id='text1'>
    <h2>Today's Topic is HTML & CSS</h2>
   </div>
        <Link to="/Page1">Go To Page1</Link>
         <br/><br />
          <div className='link2'>
         <Link to="/">Go To Home Page</Link>
         </div>
          <br/><br />
      </div >
    )
  }
}