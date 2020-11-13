import axios from "axios"
import React from "react"

export default class Lista extends React.Component {
    state = {
        lista: []
    }

    componentDidMount = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
            headers: {
                Authorization: "Paula-Soares-Tang"
            }
        }).then(response => {
            this.setState({
                lista : response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    apagaUsuario = (event) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${event.target.value}`,{
            headers: {
                Authorization: "Paula-Soares-Tang"
            }
        }).then(response => {
            this.componentDidMount()
        }).catch(error => {
            console.log(error.message);
        })
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.props.irPraRegistro}>Registro</button>
                <div className="lista">
                    <h1>Usuários Cadastrados</h1>
                    {this.state.lista.map(usuario => {
                        return <div className="user">
                                <p>{usuario.name}</p>
                                <button onClick={this.apagaUsuario} value={usuario.id}>X</button>
                        </div>
                    })}
                </div>
            </div>

        )
    }
}