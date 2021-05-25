import React from 'react';
import './ListaRow.css';
//import Button from './Button';

import pecas from '../pecas.jpg'
import clientes from '../clientes.png'
import servico from '../servicos.png'

const Lista = () =>  {
    return(
       
        <div className = 'Conteiner'> 
            <section  id = 'clicavel' className = 'Card'  style={{
                    backgroundSize:  'auto',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${clientes})`,
                    backgroundPosition: "0px 0px"  
                  
                }}>
                    
            </section>

            <section  id = 'clicavel' className = 'Card'  style={{
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${pecas})`,
                    backgroundPosition: "-100px 0px"  
                }}>
                    
            </section>



            <section  id = 'clicavel' className = 'Card'  style={{
                    backgroundSize: '500px',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${servico})`,
                }}>
                    <h1>Ordens Serviços</h1>
                    
            </section>

        </div>

        
    );
}


function executaAcao(){
    alert("Eu vou para o Google");
}

export default Lista;