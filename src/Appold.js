import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className = "Title">ConsertPhoone</h1>
          <p className = "Subtitle">
          Assistência 
          Técnica de Celulares, Tablets e 
          Computadores</p>
          <p className = "cardPhone">(65) 9 9952-0374 (65) 9 9649-6663</p>
        </div>
      </header>
    </div>
  );
}

export default App;
