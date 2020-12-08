import React from "react"
import axios from "axios"
import { ListContainer, ListHeader, ListTitle, ListBody, ListItem } from "./styled"
import { Data } from "../../styled"
import { baseURL, axiosConfig } from "../../constants"

import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded'
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded'

export default class List extends React.Component {
  state = {
    playlists: [],
    quant: 0
  }

  componentDidMount = async () => {
    await axios.get(baseURL, axiosConfig)
      .then(response => {
        this.setState({
          playlists: response.data.result.list,
          quant: response.data.result.quantity
        })
      }).catch(error => {
        console.log(error);
      })
  }

  componentDidUpdate = async () => {
    await axios.get(baseURL, axiosConfig)
      .then(response => {
        this.setState({
          playlists: response.data.result.list,
          quant: response.data.result.quantity
        })
      }).catch(error => {
        console.log(error);
      })
  }
  deletePLaylis = (id) => {
    if (window.confirm('Confirme')) {
      axios.delete(`${baseURL}/${id}`, axiosConfig)
        .then(m => { console.log(m.status); })
        .catch(e => { console.log(e.message); })
    }
  }

  render() {
    return (
      <ListContainer>
        <ListHeader>
          <ListTitle>Suas Playlists</ListTitle>
          <AddCircleOutlineRoundedIcon className="icons" alt="Adicione uma PLaylist" onClick={this.props.add} />

        </ListHeader>
        <ListBody>
          {this.state.quantity < 1 ?
            <p>"Crie sua primeira playlist no Labefy!"</p> :
            this.state.playlists.map(playlist => {
              return <ListItem key={playlist.id}>
                <PlayCircleFilledRoundedIcon alt="" onClick={() => this.props.show([playlist.id, playlist.name])} />
                <Data key={playlist.id}>{playlist.name}</Data>
                <CancelRoundedIcon alt="" onClick={() => this.deletePLaylis(playlist.id)} />
              </ListItem>
            })
          }
        </ListBody>
      </ListContainer>
    )
  }
}
