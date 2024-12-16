import GradeProdutos from "./componentes/GradeProdutos"
import BarraBusca from "./templates/BarraBusca"
import Cabecalho from "./templates/Cabecalho"
import { useEffect, useState, createContext } from "react"
import IdentificarUsuario from "./identificacao"

export const ContextoUsuario = createContext()

function App() {
  const [usuario, setUsuario] = useState({
    "usuario": "",
    "logado": false
  })
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos)
      })
  },[])

  const [produtos, setProdutos] = useState([])
  return (
    <div className="App">
      <Cabecalho/>
      <BarraBusca/>
      <GradeProdutos listaProdutos={produtos}/>
    </div>
  )
}

export default App
