import React from 'react';
import './ServicesItems.css'
export default function ServicesItem(props) {
    console.log(props.text)
  return (
  <div className='Services_Items'> 
        <div className='Card'>
            <div className='CardImg'>
            <img src={props.imgUrl} alt="imgs"></img>
            </div>
            <div className='CardInfo'>
                <h1> {props.cardheading}</h1>
            <p> {props.text} </p>
            </div>
        </div>
  </div>
  );
}
