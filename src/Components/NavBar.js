import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'
const NavBar = () => {

    return (
        <div className='Nav_Bar'>
            <i className="fas fa-bars"></i>
            <div className="Nav_Container">
            <i className= "fas fa-times-circle"></i>
            <div className='logo'>
                <h1> Manish </h1>
            </div>

            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><a href="hello">More</a></li>
            </ul>
        </div>
            </div>
           
        );
}
export default NavBar;