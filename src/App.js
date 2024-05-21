import './App.css';
import HelloWorld from './components/HelloWorld';

import React from 'react';
import Calculator from './components/Calculator';

import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';

// usado no código para atividade 1 ---- e atividade 2
import { useState } from 'react';
//import React from 'react'; ... este tbm, mas ja tinha improtado para outra atividade



function App() {
  
  const name = 'Kennedy'
  const newName = name.toUpperCase() 
  const url = 'https://via.placeholder.com/150'


  //================  COMEÇO DO CÓDIGO DA ATIVIDADE 1 ============
  const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
  const [palpite, setPalpite] = useState('');
  const [tentativasRestantes, setTentativasRestantes] = useState(5);
  const [feedback, setFeedback] = useState('');

  const handlePalpiteChange = (event) => {
    setPalpite(event.target.value);
  };

  const handleSubmit = () => {
    const palpiteInt = parseInt(palpite);

    if (isNaN(palpiteInt) || palpiteInt < 1 || palpiteInt > 100) {
      setFeedback('Palpite inválido! Digite um número entre 1 e 100.');
      return;
    }

    if (palpiteInt === numeroSecreto) {
      setFeedback('Você venceu! ');
    } else if (palpiteInt < numeroSecreto) {
      setFeedback('O número secreto é maior.');
    } else {
      setFeedback('O número secreto é menor.');
    }

    setTentativasRestantes(tentativasRestantes - 1);

    if (tentativasRestantes === 0 && palpiteInt !== numeroSecreto) {
      setFeedback('Você perdeu!  Tente novamente.');
    }
  };

  const resetGame = () => {
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setPalpite('');
    setTentativasRestantes(5);
    setFeedback('');
  };
  //================  FINAL DO CÓDIGO DA ATIVIDADE 1 ============


  //================  COMEÇO DO CÓDIGO DA ATIVIDADE 2 ============
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, { descricao: novaTarefa, concluida: false }]);
  };

  const toggleTarefaConcluida = (indice) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas[indice].concluida = !tarefasAtualizadas[indice].concluida;
    setTarefas(tarefasAtualizadas);
  };

  const removerTarefa = (indice) => {
    const tarefasAtualizadas = [...tarefas];
    tarefasAtualizadas.splice(indice, 1);
    setTarefas(tarefasAtualizadas);
  };
  //================  FINAL DO CÓDIGO DA ATIVIDADE 1 ============


  return (
    <div className='App'> 
      <h1>Alterando o JSX</h1>
      <p>Olá {newName}</p>
      <img src={url} alt='Minha imagem' />
    
      <HelloWorld/>



      <h1>Soma de Dois Números</h1>
      <Calculator />

      <p>--------------------------------</p><br/>
      <SayMyName nome="Joao"/>
      <SayMyName nome="Maria"/>

      <SayMyName nome={name}/>
      <p>--------------------------------</p><br/>

      <Pessoa nome="Gustavo" idade="18" profissao="Programador" foto={url}/>

      <p>+++++++++++++++++++++++++++++++++++</p>
      <p>+++++++++++++++++++++++++++++++++++</p><br/>
      <h3>Atividade 1: Adivinhe o Número
        Desenvolva um programa node que gera aleatoriamente um número inteiro entre 1 e 100
        e permite que o usuário tente adivinhar o número. O programa deve fornecer dicas (maior ou menor)
        para ajudar o usuário a adivinhar corretamente
      </h3>
      
      <h1>Adivinhe o Número</h1>

      <div className="input-area">
        <input type="number" value={palpite} onChange={handlePalpiteChange} />
        <button onClick={handleSubmit}>Adivinhar</button>
      </div>

      <div className="feedback">{feedback}</div>

      {tentativasRestantes > 0 && <p>Tentativas restantes: {tentativasRestantes}</p>}

      <button onClick={resetGame}>Jogar Novamente</button>
      
      <p>+++++++++++++++++++++++++++++++++++</p>
      <p>+++++++++++++++++++++++++++++++++++</p><br/>


      <h3>Atividade 2 - Lista de Tarefas</h3>
      <p>Gerenciar uma lista de tarefas.<br/>
      Permita que o usuário adicione novas tarefas, marque as tarefas como concluídas e remova as tarefas da lista</p>

      <h1>Lista de Tarefas</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        const novaTarefa = e.target.elements.novaTarefa.value;
        if (novaTarefa) {
          adicionarTarefa(novaTarefa);
          e.target.elements.novaTarefa.value = '';
        }
      }}>
        <input type="text" name="novaTarefa" placeholder="Adicione uma tarefa" />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => toggleTarefaConcluida(indice)}
            />
            <span className="tarefa-descricao" style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
              {tarefa.descricao}
            </span>
            <button onClick={() => removerTarefa(indice)}>X</button>
          </li>
        ))}
      </ul>

      <p>+++++++++++++++++++++++++++++++++++</p>
      <p>+++++++++++++++++++++++++++++++++++</p><br/>


    </div>
    
  );
}

export default App;
