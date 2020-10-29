import React from "react";
import styled from "styled-components";

const DivSuperior = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
`

export default class Superior extends React.Component {


    render() {
        return (
            <DivSuperior>
                <h1>Etapa 2: Informações do Ensino Superior</h1>
                <label>Qual graduação você concluiu?</label>
                <input placeholder={"Digite sua resposta aqui"} type="text" value={this.props.state.superior} onChange={this.props.mudaSuperior} />
               
                <label>Em qual unidade de ensino você concluiu?</label>
                <input placeholder={"Digite sua resposta aqui"} type="text" value={this.props.state.Escola} onChange={this.props.mudaEscola} />
               
            </DivSuperior>
        )
    }
}