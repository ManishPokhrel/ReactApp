import React from 'react';
import './Services.css'
import ServicesItem from './ServicesItem';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
  let data = [
    {
        cardheading: "Power Of Technology",
        imgInfo: "Technology is the most important things of today world so you must need to take the knowledge about it.",
        UrlToImage: img1
    },
    {
        cardheading: "Never Give Up",
        imgInfo: "In any situation in your life never forget what you want to be and Never Give up",
        UrlToImage: img2
    },
    {   
        cardheading: "Show Your Power",
        imgInfo: "Success is the best weapon to show down your enemy..",
        UrlToImage: img3
    },
    {
        cardheading: "EveryDay is second chance",
        imgInfo: "Never wait for second chance because when sun is rise your second chance is start",
        UrlToImage: img4
    },
    {
        cardheading: "Never Let you down",
        imgInfo: "Never think you cannot do it always be positive and move ahead",
        UrlToImage: img5
    },
    {
        cardheading: "Get Success",
        imgInfo: "The final result of your hardwork is Success",
        UrlToImage: img6
    },
]
export default function Services(props) {

  return (
      
  <div className='flex_box'>
       {
          data.map((elem) => {
              return <div key={elem.UrlToImage} className='Cards'> 
                  <ServicesItem text={elem.imgInfo} imgUrl={elem.UrlToImage} cardheading={elem.cardheading}/>
              </div>
          })
       }
  </div>
  );
}
