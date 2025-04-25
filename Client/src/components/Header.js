import React from 'react';
import logo from './img.png';
import './Header.css';


function Header() {

    return(
        <header className="header">
            <div className="logo"><img src={logo} alt="Logo"/></div>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="login-button">
                <button>Login</button>
            </div>
        </header>
    );
}
export default Header;