import logo from "../assets/imagens/ricardoeletro.png"
import { ContextoUsuario } from "../App"
import { useContext } from "react"

export default function Cabecalho(props){

    const {usuario, setUsuario} = useContext(ContextoUsuario)

    return(
        <header
            style={
                {
                    margin: '0px',
                    padding: '0px',
                }
            }>
            <img src={logo} alt="Logo"/>
            
            {
                //nome do usuario atualmente logado, ou não
            }
            <h1>{usuario.nome}</h1>
        </header>
    )
}