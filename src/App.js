//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ListaRow from './components/ListaRow';
import Featured from './components/Featured';
import Header from './components/Header';


const App = () => {


  const [blackHeader, setBlackHeader] = useState(false);
  const [Lista, /*setLista*/] = useState([{Titulo: 'Tela da Lista'}]);


  return(
    <div>
      {/*<Header/>*/} 
      <Featured/>
      
      <section className = "Listas">
        {Lista.map(() => (
          <ListaRow />
        ))}
      </section>
    </div>
  );

}

export default App;