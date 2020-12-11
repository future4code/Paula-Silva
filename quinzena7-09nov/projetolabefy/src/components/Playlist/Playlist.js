import React from "react"
import axios from "axios"

import { PlaylistContainer, PlaylistHeader, PlaylistTitle, PlaylistBody, PlaylistItem } from "./styled"
import { Data } from "../../styled"
import { baseURL, axiosConfig } from "../../constants"

import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded'

export default class Playlist extends React.Component {
  deleteTrack = (id) => {
    if (window.confirm('Confirme')) {
      axios.delete(`${baseURL}/${this.props.playlistId}/tracks/${id}`, axiosConfig)
        .then(m => { console.log(m.status); })
        .catch(e => { console.log(e.message); })
    }

  }
  render() {
    return (
      <PlaylistContainer>
        <PlaylistHeader>
          <PlaylistTitle>{this.props.name}</PlaylistTitle>
          <AddCircleOutlineRoundedIcon alt="" onClick={this.props.add} />
          <CancelRoundedIcon alt="" onClick={this.props.close} />
        </PlaylistHeader>
        <PlaylistBody>
          {this.props.tracks.map(track => {
            return <PlaylistItem key={track.id}>
              <PlayCircleFilledRoundedIcon alt="" onClick={() => this.props.play(track.id)} />
              <Data key={track.id}>{track.name}</Data>
              <CancelRoundedIcon alt="" onClick={() => this.deleteTrack(track.id)} />
            </PlaylistItem>
          })}
        </PlaylistBody>
      </PlaylistContainer>
    )
  }
}
