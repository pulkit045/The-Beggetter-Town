import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../../assets/logo.jpg';
import './Header.css';
const Header = () => {

    const [isMobile,setIsMobile] = useState(false);
  return (
    <>
        <nav className='navbar'>
            <h3 className='logo'>
            {/* <img src={Logo} alt="" title="logo" /> */}
            Logo            
            </h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
            >
               
                <Link to="/login" className='login'>
                    <li>Login</li>
                </Link>
                <Link to="/register" className='signup'>
                    <li>Sign up</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? ( <i className='fas fa-times'></i> ):
                 (<i className='fas fa-bars'></i> ) }
            </button>
        </nav>
    </>
  )
}

export default Header;