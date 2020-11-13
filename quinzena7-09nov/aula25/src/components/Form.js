import React from "react"
import axios from "axios"

export default class Form extends React.Component {

    enviar = () => {
        const body = {
            name: this.props.state.nome,
            email: this.props.state.email
        }
        let mensagem = ""
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "Paula-Soares-Tang"
            }
        }).then( response => {
            mensagem = alert("Usuário incluído com sucesso")
            this.props.limpaCampos()
          }).catch( error => {
            mensagem = alert("Deu ruim. Os campos são obrigatórios e o campo email precisa ter uma @")
        })
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.props.irPraLista}>Lista</button>
                <div className="form">
                    <input type="text" placeholder="Nome" value={this.props.state.nome} onChange={this.props.onChangeNome} />
                    <input type="text" placeholder="E-mail" value={this.props.state.email} onChange={this.props.onChangeEmail} />
                    <button onClick={this.enviar}>Enviar</button>
                    {this.mensagem}
                </div>
            </div>

        )
    }
}