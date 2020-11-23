import React from "react"
import axios from "axios"
import {ListContainer, ListHeader, ListTitle, ListBody, ListItem} from "./styled"
import {Icon, Data} from "../../styled"

export default class List extends React.Component {
    state = {
      playlists: [],
      quant: 0
    }

    componentDidMount = async () => {
     await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{
        headers: {
            Authorization: "Paula-Soares-Tang"
        }
    }).then(response => {
        this.setState({
            playlists : response.data.result.list,
            quant: response.data.result.quantity
        })
    }).catch(error => {
        console.log(error);
    })
    }

    render() {
        return (
            <ListContainer>
            <ListHeader>
              <ListTitle>Suas Playlists</ListTitle>
              <Icon src={this.props.plus} alt="" onClick={this.props.add} />
            </ListHeader>
            <ListBody>
              {this.state.quantity<1? 
                <p>"Crie sua primeira playlist no Labefy!"</p> : 
                this.state.playlists.map(playlist => {
                  return <ListItem key={playlist.id}>
                    <Icon src={this.props.play} alt="" onClick={this.props.show} />
                    <Data key={playlist.id}>{playlist.name}</Data>
                    <Icon src={this.props.close} alt="" onClick={this.props.show} />
                    </ListItem>
                })
              }
            </ListBody>
          </ListContainer>
        )
    }
}
