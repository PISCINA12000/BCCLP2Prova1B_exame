import { Container, Form, Button} from "react-bootstrap"
import { useContext, useRef } from "react"
import toast, {Toaster} from 'react-hot-toast'
import listaUsuarios from "./dados/listaUsuarios.js"
import ContextoUsuario from "./App.js"

export default function IdentificarUsuario(){
    const cpfUsuario = useRef()
    const nomeUsuario = useRef()
    const enderecoUsuario = useRef()
    const cidadeUsuario = useRef()
    const ufUsuario = useRef()
    const {usuario, setUsuario} = useContext(ContextoUsuario)

    function manipularSubmissao(evento){
        const cpfDigitado = cpfUsuario.current.value
        const nomeDigitado = nomeUsuario.current.value
        const enderecoDigitado = enderecoUsuario.current.value
        const cidadeDigitada = cidadeUsuario.current.value
        const ufDigitado = ufUsuario.current.value

        var i = 0
        console.log(listaUsuarios)
        while (i < listaUsuarios.length &&
            (listaUsuarios[i].cpf !== cpfDigitado ||
            listaUsuarios[i].nome !== nomeDigitado ||
            listaUsuarios[i].endereco !== enderecoDigitado ||
            listaUsuarios[i].cidade !== cidadeDigitada ||
            listaUsuarios[i].uf !== ufDigitado))
            i++
        if (i < listaUsuarios.length) //achei 
        {
            //verificacao
            if(listaUsuarios[i].cpf === cpfDigitado &&
                listaUsuarios[i].nome === nomeDigitado &&
                listaUsuarios[i].endereco === enderecoDigitado &&
                listaUsuarios[i].cidade === cidadeDigitada &&
                listaUsuarios[i].uf === ufDigitado) //achei o usuario
            {
                setUsuario({
                    "usuario": listaUsuarios[i].nome,
                    "logado": true
                })
                console.log("usuario logado!\n");
            }
        }
        else{
            toast.error("Usuario Incorreto!!\n")
        }

        evento.preventDefault()
        evento.stopPropagation()
    }

    return(
        <Container className="w-25 border p-2">
            <Form onSubmit = {manipularSubmissao}>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control  
                        type="text" 
                        placeholder="cpf"
                        id = "cpf"
                        name = "cpf"
                        ref = {cpfUsuario} // nomeUsario se refere à usuario
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control  
                        type="text" 
                        placeholder="nome"
                        id = "nome"
                        name = "nome"
                        ref = {nomeUsuario} // nomeUsario se refere à usuario
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control  
                        type="text" 
                        placeholder="endereco"
                        id = "endereco"
                        name = "endereco"
                        ref = {enderecoUsuario} // nomeUsario se refere à usuario
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control  
                        type="text" 
                        placeholder="cidade"
                        id = "cidade"
                        name = "cidade"
                        ref = {cidadeUsuario} // nomeUsario se refere à usuario
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Label>UF</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="uf"
                        id = "uf"
                        name = "uf"
                        ref = {ufUsuario} // nomeUsario se refere à usuario
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit">Login
                </Button>
                <Toaster position="top-right"/>
            </Form>
        </Container>
    )
}
