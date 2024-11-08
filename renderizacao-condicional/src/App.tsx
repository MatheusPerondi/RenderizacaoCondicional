import { useState } from 'react'
import './App.css'

function App() {
  const [signed, setSigned] = useState(false);

  return (
    <div>
      

      {signed ? (
        <><h1>Bem vindo matheus</h1><button onClick={() => setSigned(false)}>Sair</button></>
      ) : (
        <><h1>Nenhum usuario logado</h1><button onClick={() => setSigned(true)}>Entrar</button></>
      )}
    </div>
  )
}

export default App
