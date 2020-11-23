import React from "react"
import { AddListContainer, AddListHeader, AddListTitle, AddListBody } from "./styled"
import { Icon, Input, Button } from "../../styled"


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
        !this.state.iptName&&alert('Digite um nome para sua playlist')
        //vai dentro do then do axios
        console.log(this.state.iptName);
        this.props.close();
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
