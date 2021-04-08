import React from 'react';
import './Header.css';
import logo from '../Logo2.png';

export default ({black}) => {
    return(
        <header className={black ? 'black' : 'header'}>
            <div className='header--logo'>
                <img src={logo}/>
            </div>
        </header>
    );
}