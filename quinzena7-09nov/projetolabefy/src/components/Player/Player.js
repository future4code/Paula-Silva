import React from "react"
import { PlayerContainer, PlayerHeader, PlayerTitle, PlayerBody } from "./styled"

export default class List extends React.Component {
    render() {
        return (
            <PlayerContainer>
                <PlayerHeader>
                    <PlayerTitle>Tocando agora</PlayerTitle>
                </PlayerHeader>
                <PlayerBody>{this.props.music}Imagem, nome, artista e player</PlayerBody>
            </PlayerContainer>
        )
    }
}
