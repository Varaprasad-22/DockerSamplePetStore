import React from 'react';
import { Link } from 'react-router-dom';    
import { FaDog } from 'react-icons/fa';
import './header.css';
function Header(){
    return (
        <div className="header_container">
            <nav className='navigation'>
                <div className="logo">
                    <Link to="/">
                    <FaDog/>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/addItem">AddToCart</Link></li>
                </ul>
            </nav>
        </div>
    )
}


export default Header;