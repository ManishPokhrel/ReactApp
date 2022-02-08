import React, { Component } from 'react';
import Common from './Common';
import home from './home.jpg'
export default class Home extends Component {
  render() {
    return (
      <>
        <Common title="Home" img={home} btnName="About Us" link='/About'/>
       
        </>
    );
  }
}
