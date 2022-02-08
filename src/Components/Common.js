import React from 'react';
import {Link} from 'react-router-dom'
import './Common.css'
// import dollar from './dollar.jpg'
const Common = (props) => {

        return (
            <>
            
            <div className='Main_Container'>
              
                   <div className='Left_Content'>
                   <h1> Welcome in {props.title} Page</h1>
                       <h4> Invest Today For Your Tommorow</h4>
                       <p> Invest In crypto currency for lowest price in just a minute with <span> <b>Manish Pokhrel </b></span></p>
                            <Link to={props.link?props.link:"#"}><button> {props.btnName} </button></Link>
                   </div>
                   <div className='Right_Content'>
                       <img src={props.img} alt="Images"/>
                    </div>
            </div>
            </>
        )
    }

export default Common;