import React from "react"
import { PlayerContainer, PlayerHeader, PlayerTitle, PlayerBody, PlayerItem } from "./styled"
import { Data } from "../../styled"
import CancelRoundedIcon from '@material-ui/icons/CancelRounded'

export default class List extends React.Component {
    render() {
        return (
            <PlayerContainer>
                <PlayerHeader>
                    <PlayerTitle>Tocando agora</PlayerTitle>
                    <CancelRoundedIcon alt="" onClick={this.props.close} />
                </PlayerHeader>
                <PlayerBody>
                    <PlayerItem>
                        <Data>{this.props.music.name}</Data>
                        <Data>{this.props.music.artist}</Data>
                        <Data>{this.props.music.url}</Data>
                    </PlayerItem>
                    
                    </PlayerBody>
            </PlayerContainer>
        )
    }
}
