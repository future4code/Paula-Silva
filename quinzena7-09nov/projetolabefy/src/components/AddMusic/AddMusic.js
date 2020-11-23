import React from "react"
import { AddMusicContainer, AddMusicHeader, AddMusicTitle, AddMusicBody } from "./styled"
import { Icon, Input, Button } from "../../styled"


export default class AddMusic extends React.Component {
    state = {
        iptName: "",
        iptArtist: "",
        iptAudio: ""
    }

    onChangeiptName = (event) => {
        this.setState({
            iptName : event.target.value
        })
    }
    onChangeiptArtist = (event) => {
        this.setState({
            iptArtist : event.target.value
        })
    }
    onChangeiptAudio = (event) => {
        this.setState({
            iptAudio : event.target.value
        })
    }

    savePlaylist = () => {
        !this.state.iptName&&!this.state.iptArtist&&!this.state.iptAudio&&alert("Preencha todos os campos para adicionar a música à Playlist")
        console.log(this.state);
        this.props.close();
    }

    render() {
        return (
            <AddMusicContainer>
                <AddMusicHeader>
                    <AddMusicTitle>Adicione uma música à Playlist </AddMusicTitle>
                    <Icon src={this.props.icon} alt="FECHA" onClick={this.props.close} />
                </AddMusicHeader>

                <AddMusicBody>
                    <Input type="text" placeholder="Nome da Música" value={this.state.iptName} onChange={this.onChangeiptName}/>
                    <Input type="text" placeholder="Nome do Artista" value={this.state.iptArtist} onChange={this.onChangeiptArtist}/>
                    <Input type="text" placeholder="Link do Áudio" value={this.state.iptAudio} onChange={this.onChangeiptAudio}/>
                    <Button onClick={this.savePlaylist}>Salvar</Button>
                </AddMusicBody>
            </AddMusicContainer>
        )
    }
}
