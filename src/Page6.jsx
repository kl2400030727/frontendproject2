import React, { Component } from 'react'
import'./css/Page6.css'
export default class Page6 extends Component {
  render() {
    return (
      <>
      
      <div id='header'>
        <div className='logo'>
            My Project Logo
        </div>
      </div>
      <div id='section'>
        <div className='card'>
           <img src='images/img4.jpg' alt='image1'></img>
            <label>Adidas</label>
        </div>
        <div className='card'>
          <img src='images/img5.jpg'alt='image2'></img>
          <label>Nike</label>  
        </div>
         <div className='card'>
          <img src='images/img6.jpg'alt='image3'></img>
          <label>BMW</label>  
        </div>
      </div>
      <div id='footer'>Copyright @ 2025.All rights reserved.</div>
      </>
    )
  }
}
