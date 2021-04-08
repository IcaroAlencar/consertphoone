import React from 'react';
import './Featured.css';

import destaque from '../destaque.jpg'

const Featured = () =>{
    return(
        <section className = "featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${destaque})`
         }}>
             <div className = 'featured--vertical'>
             <div className = 'featured--horizontal'>

             </div>
             </div>

        </section>
    );
}

export default Featured;