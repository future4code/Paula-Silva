import React from "react";
import styled from "styled-components";

const DivDadosGerais = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
`

export default class DadosGerais extends React.Component {


    render() {
        return (
            <DivDadosGerais>
                <h1>Etapa 1: Dados Gerais</h1>

                <input placeholder={"Nome"} type="text" value={this.props.state.nome} onChange={this.props.mudaNome} />

                <input placeholder={"Idade"} type="number" min={0} value={this.props.state.idade} onChange={this.props.mudaIdade} />

                <input placeholder={"Email"} type="text" value={this.props.state.email} onChange={this.props.mudaEmail} />

                <select value={this.props.state.escolaridade} onClick={this.props.mudaEscolaridade} onChange={this.props.mudaEscolaridade}>
                    <option value="Ensino Médio Incompleto" key="1">Ensino Médio Incompleto</option>
                    <option value="Ensino Médio Completo" key="2">Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto" key="3">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo" key="4">Ensino Superior Completo</option>
                </select>

            </DivDadosGerais>
        )
    }
}