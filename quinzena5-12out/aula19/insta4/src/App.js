import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const DivForm = styled.div` 
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        usuario: 'paulinha',
        foto: 'https://picsum.photos/50/50',
        post: 'https://picsum.photos/200/150'
      },
      {
        usuario: 'fulanin',
        foto: 'https://picsum.photos/50/50?a=2',
        post: 'https://picsum.photos/200/150?a=2'
      },
      {
        usuario: 'sicranin',
        foto: 'https://picsum.photos/50/50?a=3',
        post: 'https://picsum.photos/200/150?a=3'
      }
    ],
    usr: "",
    profile: "",
    post: ""
  }

  mudaUsr = (event) => {
    this.setState({
      usr: event.target.value
    })
  }
  mudaProfile = (event) => {
    this.setState({
      profile: event.target.value
    })
  }
  mudaPost = (event) => {
    this.setState({
      post: event.target.value
    })
  }

  enviaPost = () => {
    const novoPost = {
      usuario: this.state.usr,
      foto: this.state.profile,
      post: this.state.post
    }
    this.setState({
      posts: [novoPost, ...this.state.posts],
      usr: "",
      profile: "",
      post: ""
    })



    console.log(this.state.posts);
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.usuario}
          fotoUsuario={post.foto}
          fotoPost={post.post}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <DivForm>
          <input type="text" placeholder={'Usuário'} value={this.state.usr} onChange={this.mudaUsr} />
          <input type="text" placeholder={'Foto do Perfil'} value={this.state.profile} onChange={this.mudaProfile} />
          <input type="text" placeholder={'Foto do Post'} value={this.state.post} onChange={this.mudaPost} />
          <button onClick={this.enviaPost}>Enviar</button>
        </DivForm>
        {posts}
      </div>
    );
  }
}

export default App;
