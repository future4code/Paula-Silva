import React from "react"
import "./App.css"
import Form from "./components/Form"
import Lista from "./components/Lista"

class App extends React.Component {
  state = {
    pagina: 1,
    nome: "",
    email: ""
  }

  limpaCampos = () => {
    this.setState({
      nome: "",
      email: ""
    })
  }
  onChangeNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }


  irPraLista = () => {
    this.setState({
      pagina: this.state.pagina + 1
    })
  }

  irPraRegistro = () => {
    this.setState({
      pagina: this.state.pagina - 1
    })
  }

  render() {
    return (
      <>
        { this.state.pagina === 2 ?
          <Lista irPraRegistro={this.irPraRegistro} /> :
          <Form state={this.state} onChangeEmail={this.onChangeEmail} onChangeNome={this.onChangeNome} irPraLista={this.irPraLista} limpaCampos={this.limpaCampos} />
        }
      </>
    )
  }
}

export default App;
