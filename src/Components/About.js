import React from 'react';
import Common from './Common';
import about from './about.png';



export default function About() {
   
  return (
      <div>
          <Common title="About" img={about} btnName="Our Services" link='/Services'/>
      </div>
      );
}
