import { useContext, useState } from "react"
import { ContextoUsuario } from "../App"
import IdentificarUsuario from "../identificacao"
import { Provider } from "react"

export default function Produto(props){

    const [quantidade, setQuantidade] = useState(1)
    const [comprar, setComprar] = useState(1)
    const {usuario, setUsuario} = useContext(ContextoUsuario)

    function adicionarProdCarrinho(produto){
        if(!usuario.logado)
            return (
                <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
                  <IdentificarUsuario />
                </ContextoUsuario.Provider>
              )
        else{
            //adicionar as informações ao carrinho, pois o usuário está logado
        }
    }

    return(
        <div
            style={{
                width: '200px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '10px',
                padding: '10px',
                marginBottom: '40px'
            }}>
            <div
                id='imagem-produto'
                style={{
                    width:'100px',
                    height: '100px',
                }}>
                <img
                    style={{
                        width:"100%",
                        height:"100%"
                    }}
                    src={props.produto?.image || ''} 
                    alt={props.produto?.description || ''}
                />
            </div>
            <div
                id='titulo-produto'
                style={{
                    height: '40px'
                }}>
                <p>
                    <strong>{props.produto?.title.substring(0, 20)}</strong>
                </p>
            </div>
            <div
                id='preco-produto'
                style={{
                    color: 'rgb(0,120,0)',
                }}>
                <p>
                    <strong>R$ {props.produto?.price}</strong>
                </p>
            </div>
            <div
                id="opinioes-produoto"
                style={{}}>
                <span>
                    {((props.produto ? props.produto.rating.rate : 0) * 20) || 0}% gostaram
                </span>
            </div>
            <div
                id='quantidade-selecionada'
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <p
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '40px',
                        margin: '0px',
                        padding: '0px',
                        marginRight: '10px',
                    }}>Quantidade:
                </p>
                <input 
                    style={{
                        width: '40px',
                        border: '0px',
                        outline: 'none',
                    }}
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)} 
                    step={1}
                    min={1}
                />
            </div>
            <div id='botao-comprar'>
                <button
                    onClick={ ()=> {
                        adicionarProdCarrinho(props.produto)
                    }}
                    style={{
                        backgroundColor: 'rgb(255,60,60)',
                        color: 'white',
                        border: '0px',
                        borderRadius:'10px',
                        height: '40px',
                        width: '120px',
                    }}
                    type='button'>Comprar
                </button>
            </div>
        </div>
    )
}