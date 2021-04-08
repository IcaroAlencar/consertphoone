//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ListaRow from './components/ListaRow';
import Featured from './components/Featured';
import Header from './components/Header';

const App = () => {


  const [blackHeader, setBlackHeader] = useState(false);
  const [Lista, /*setLista*/] = useState([{Titulo: 'Tela da Lista'}]);

  useEffect(() => {
    const scrollListener = () =>{
      
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(
    <div className = "Principal">

     <Header  black ={blackHeader}/> 

      <Featured/>

      <section className = "Listas">
        {Lista.map((Titulo) => (
          <ListaRow Titulo={Titulo.Titulo}/>
        ))}
      </section>
    </div>
  );

}

export default App;