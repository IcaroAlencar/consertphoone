import React from 'react';
import './Header.css';
/*import logo from '../Logo2.png';*/


const Header = ({black}) => {
    return(
        <header className = 'header'>
           {/*
            <div className='header--logo'>
                <img src={logo} alt='Logo ConsertPhoone'/>
            </div>
            */}

            <button className = 'btn' > 
                <h1 className = 'txt'>
                    Clientes
                </h1>
            </button>

            <button className = 'btn2'>
                <h1 className = 'txt'>
                    Peças
                </h1>
            </button>

            <button className = 'btn3' onClick = {onclick}> 
                <h1 className = 'txt'>
                    Serviço
                </h1>
            </button>
        </header>
    );
}


export default Header;