import React from "react"
//Styled Components
import {Container, MainTitle, AppContainer, Overlay} from './styled'

//icones
import plus from "./img/plus-circle-solid.svg";
import close from "./img/cancel.svg";
import play from "./img/play-circle-solid.svg";

//Components
import List from "./components/List/List"
import Playlist from "./components/Playlist/Playlist"
import Player from "./components/Player/Player"
import AddList from "./components/AddList/AddList"
import AddMusic from "./components/AddMusic/AddMusic"

class App extends React.Component {
  state = {
    mostraPlaylist: true,
    mostraPlayer: false,
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
    this.loadForm = <AddMusic icon={close} close={this.closeOverlay} />
  }

  closeOverlay = () => {
    this.setState({
      overlay: false
    })
  }

  showPlaylist = () => {
    this.setState({
      mostraPlaylist: true
    })
  }

  closePlaylist = () => {
    this.setState({
      mostraPlaylist: false
    })
  }

  render() {

    return (
      <Container>
        <MainTitle>Bem-vind@ ao Labefy!</MainTitle>
        <AppContainer>

          <List plus={plus} close={close} play={play} add={this.onclickAddPlaylist} show={this.showPlaylist}/>

          {this.state.mostraPlaylist &&
            <Playlist plus={plus} close={close} add={this.onclickAddMusic} closeFunction={this.closePlaylist}/>}

          {this.state.mostraPlayer &&
            <Player music={"Music playing"} />}

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
