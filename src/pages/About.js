import React, { Component } from 'react';
import "./About.css";
 import hongkun from "./assets/hongkun.jpg";



export default class About extends Component {
  render() {
    return (
      <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={hongkun}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Hongkun Zeng</div>
        <div className="brief_description">
          <p>My name is Hongkun and I am a rising junior at UIUC. I majored in Computer Engineering, which involves with both hardware and software learning.</p>
          <p>I love software engineering because it makes people's life so much more easier! I hope one day I could be a software engineer and help people solve some problems that would be
            better done by the computer than by our raw hand.
          </p>
          <p>Some fun fact about me would be that I am a HUGE rhythm game player!! Feel free to play games together or connect with me at hongkunzeng@gmail.com!</p>
        </div>
      </div>
    </div>
  </div>

    )
  }
}