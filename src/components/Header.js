import React from 'react';
import './Header.css';
import logo from '../Logo2.png';

const Header = ({black}) => {
    return(
        <header className={black ? 'black' : 'header'}>
            <div className='header--logo'>
                <img src={logo} alt='Logo ConsertPhoone'/>
            </div>
        </header>
    );
}

export default Header;