import { useState } from 'react'
import { Card } from './componentes'
import './App.css'

function App() {
  const [nomeVoluntario, setNomeVoluntario] = useState('')
  const [voluntario, setVoluntario] = useState([])
  // const [voluntarios, setVoluntarioPresente] = useState({})
   function adicionaVoluntario(){
    const novoVoluntario = {
      name: nomeVoluntario,
      time: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setVoluntario(prevState => [... prevState, novoVoluntario])
   }
   return(
    <div className='container'>
      <header className='header'>
        <h1 className='titulo'>Lista de presença</h1>
      </header>
      <input type="text" placeholder='Digite seu nome...' onChange={(e)=> setNomeVoluntario(e.target.value)}/>
      <button className='botao' onClick={adicionaVoluntario}>Adicionar</button>
      {
        voluntario.map(voluntario => (
          <Card
          key={voluntario.time}
          name={voluntario.name}
          time={voluntario.time}
          />
        ))
      }
      </div>
      )
    }

export default App
