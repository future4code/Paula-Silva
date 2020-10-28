import React from 'react'
import styled from 'styled-components'

import DadosGerais from "./components/DadosGerais"
import Medio from "./components/Medio"
import Superior from "./components/Superior"


const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
`

class App extends React.Component {
  state = {
    etapa: 0,
    nome: "",
    idade: "",
    email: "",
    escolaridade: "",
    superior: "",
    escola: "",
    medio: "",
    complementar: ""
  }
mudaNome = (event) => {
    this.setState({
        nome: event.target.value
    })
}        
mudaIdade = (event) => {
    this.setState({
        idade: event.target.value
    })
}      
mudaEmail = (event) => {
    this.setState({
        email: event.target.value
    })
}

mudaEscolaridade = (event) => {
    this.setState({
        escolaridade: event.target.value
    })
}

mudaSuperior = (event) => {
    this.setState({
        superior: event.target.value
    })
}

mudaEscola = (event) => {
    this.setState({
        escola: event.target.value
    })
}

mudaMedio = (event) => {
    this.setState({
        medio: event.target.value
    })
}

mudaComplementar = (event) => {
    this.setState({
        complementar: event.target.value
    })
}

proximaTela = () => {

  if (this.state.escolaridade.indexOf('Médio')!=-1) {
    this.setState({
      etapa : this.state.etapa+2
    })
  } else {
    this.setState({
    etapa : this.state.etapa+3
  })
}
  }

  

telaInicial = () => {
  this.setState({
    etapa : 0
  })

}
  render() {
    const renderizaQuestoes = () => {

      switch (this.state.etapa) {
        case 0:
          return <DadosGerais state={this.state} mudaNome={this.mudaNome} mudaIdade={this.mudaIdade} mudaEmail={this.mudaEmail} mudaEscolaridade={this.mudaEscolaridade}/>  
        case 2:
          return <Medio state={this.state} mudaMedio={this.mudaMedio} mudaComplementar={this.mudaComplementar} /> 
        case 3:
          return <Superior state={this.state} mudaSuperior={this.mudaSuperior} mudaEscola={this.mudaEscola} /> 
      
        default:
          console.log(this.state);
          return (
            <h1>Obrigada por responder nosso formulário.</h1>
          )
      }
    } 

    const renderizaBotao = () => {
      if (this.state.etapa>3) {
        return <button onClick={this.telaInicial}>Voltar pro começo</button>
      } else {
        return <button onClick={this.proximaTela}>Próxima Tela</button>
      }
    }

    return (
      <DivApp>
        {renderizaQuestoes()}
        {renderizaBotao()}
      </DivApp>
    );
  }
}
export default App;
