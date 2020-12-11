import React from "react"
import axios from "axios"
import { AddListContainer, AddListHeader, AddListTitle, AddListBody } from "./styled"
import { Icon, Input, Button } from "../../styled"

import { baseURL, axiosConfig } from "../../constants"



export default class AddList extends React.Component {
    state = {
        iptName: ""
    }

    onChangeName = (event) => {
        this.setState({
            iptName: event.target.value
        })
    }

    saveNewPlaylist = () => {
        if (this.state.iptName) {
            const requestBody = {
                name: this.state.iptName
            }
            axios.post(baseURL, requestBody, axiosConfig)
                .then(message => {
                    console.log(message.status);
                    alert('Playlist incluída com sucesso')
                    this.props.close();
                }).catch(error => {
                    console.log(error);
                    alert('Já existe uma playlist com esse nome. Escolha outro')
                })
        } else {
            alert('Digite um nome para sua playlist')
        }
    }

    render() {
        return (
            <AddListContainer>
                <AddListHeader>
                    <AddListTitle>Criar PlayList </AddListTitle>
                    <Icon src={this.props.icon} alt="FECHA" onClick={this.props.close} />
                </AddListHeader>

                <AddListBody>
                    <Input type="text" placeholder="Nome da Nova PLaylist" value={this.state.iptName} onChange={this.onChangeName} />
                    <Button onClick={this.saveNewPlaylist}>Salvar</Button>
                </AddListBody>
            </AddListContainer>
        )
    }
}
