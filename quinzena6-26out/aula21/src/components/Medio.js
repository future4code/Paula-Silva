import React from "react";
import styled from "styled-components";

const DivMedio = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
  height: 50vh;
`

export default class Medio extends React.Component {


    render() {
        return (
            <DivMedio>
                <h1>Etapa 2: Informações de Ensino</h1>
                <label>Por que você não terminou um curso de graduação?</label>
                <input placeholder={"Digite sua resposta aqui"} type="text" value={this.props.state.medio} onChange={this.props.mudaMedio} />
               
                <select value={this.props.state.complementar} onChange={this.props.mudaComplementar}>
                    <option value="Nenhum" key="1">Nenhum</option>
                    <option value="Curso Técnico" key="2">Curso Técnico</option>
                    <option value="Curso de Inglês" key="3">Curso de Inglês</option>
                </select>

            </DivMedio>
        )
    }
}