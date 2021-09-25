import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
         <img className="logo" src={logo} alt="header-logo"/>
        </div>
    );
};

export default Header;