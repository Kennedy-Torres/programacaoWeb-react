import './App.css';
import HelloWorld from './components/HelloWorld';

import React from 'react';
import Calculator from './components/Calculator';

function App() {
  
  const name = 'Kennedy'
  const newName = name.toUpperCase() 
  const url = 'https://via.placeholder.com/150'


  return (
    <div className='App'> 
      <h1>Alterando o JSX</h1>
      <p>Olá {newName}</p>
      <img src={url} alt='Minha imagem' />
    
      <HelloWorld/>



      <h1>Soma de Dois Números</h1>
      <Calculator />

    </div>
    
    
  );
}

export default App;
