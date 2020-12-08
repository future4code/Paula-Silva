import React from "react"
import axios from "axios"
//Styled Components
import { Container, MainTitle, AppContainer, Overlay } from './styled'

//icones
import close from "./img/cancel.svg";
import RadioRoundedIcon from '@material-ui/icons/RadioRounded';

//Components
import List from "./components/List/List"
import Playlist from "./components/Playlist/Playlist"
import Player from "./components/Player/Player"
import AddList from "./components/AddList/AddList"
import AddMusic from "./components/AddMusic/AddMusic"

//Constantes
import { baseURL, axiosConfig } from "./constants"


class App extends React.Component {
  state = {
    showFramePlaylist: false,
    tracks: [],
    playlistName: "",
    playlistId: "",
    showFramePlayer: false,
    nowPlaying: "",
    overlay: false
  }
  loadForm = <></>

  onclickAddPlaylist = () => {
    this.setState({
      overlay: !this.state.overlay
    })
    this.loadForm = <AddList icon={close} close={this.closeOverlay} />
  }

  onclickAddMusic = () => {
    this.setState({
      overlay: !this.state.overlay
    })
    this.loadForm = <AddMusic icon={close} close={this.closeOverlay} id={this.state.playlistId}/>
  }

  closeOverlay = () => {
    this.setState({
      overlay: false
    })
  }

  showPlaylist = (args) => {
    this.setState({
      showFramePlaylist: true
    })
    axios.get(`${baseURL}/${args[0]}/tracks`, axiosConfig)
      .then(response => {
        this.setState({
          tracks: response.data.result.tracks,
          playlistName: args[1],
          playlistId: args[0]
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  closePlaylist = () => {
    this.setState({
      showFramePlaylist: false,
      showFramePlayer: false
    })
  }

  showPlayer = (id) => {
    this.setState({
      showFramePlayer: true
    })
    const nowPlaying = this.state.tracks.find(music => { return music.id === id })
    this.setState({
      nowPlaying: nowPlaying
    })
  }
  closePlayer = () => {
    this.setState({
      showFramePlayer: false,
      nowPlaying: ""
    })
  }
  render() {

    return (
      <Container>
        <MainTitle>Bem-vind@ ao Labefy!<RadioRoundedIcon /></MainTitle>
        <AppContainer>

          <List add={this.onclickAddPlaylist} show={this.showPlaylist} />

          {this.state.showFramePlaylist &&
            <Playlist tracks={this.state.tracks} name={this.state.playlistName} playlistId={this.state.playlistId} show={this.showPlaylist} add={this.onclickAddMusic} play={this.showPlayer} close={this.closePlaylist} />}

          {this.state.showFramePlayer &&
            <Player music={this.state.nowPlaying} close={this.closePlayer} />}

          {this.state.overlay &&
            <Overlay>
              {this.loadForm}
            </Overlay>}

        </AppContainer>
      </Container>
    );
  }
}

export default App;
