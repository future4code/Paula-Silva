import React from "react"
import {PlaylistContainer, PlaylistHeader, PlaylistTitle, PlaylistBody} from "./styled"
import {Icon} from "../../styled"

export default class Plalist extends React.Component {
    render() {
        return (
            <PlaylistContainer>
              <PlaylistHeader>
                <PlaylistTitle>Nome da Playlist</PlaylistTitle>
                <Icon src={this.props.plus} alt="" onClick={this.props.add} />
                <Icon src={this.props.close} alt="" onClick={this.props.closeFunction} />
              </PlaylistHeader>
              <PlaylistBody>Músicas da Playlist</PlaylistBody>
            </PlaylistContainer>
        )
    }
}
