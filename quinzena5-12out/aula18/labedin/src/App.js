import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars0.githubusercontent.com/u/67557314?s=460&u=990cb274e7f7e02e5df4491ba9d29f74acc15b1c&v=4" 
          nome="Paula F Soares" 
          descricao="Oi, eu sou a Paula. E basicamente minha vida está parada até eu conseguir um emprego como dev =')"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno 
          imagem = {'https://www.flaticon.com/svg/static/icons/svg/1060/1060370.svg'}
          legenda = {'E-mail'}
          valor = {'sou@paulasoares.me'}
        />
        <CardPequeno 
          imagem = {'https://www.flaticon.com/svg/static/icons/svg/1096/1096701.svg'}
          legenda = {'Endereço'}
          valor = {'Com mto esmero na rua dos Bobos, nº 0 '}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s.w.org/style/images/about/alternative.png" 
          nome="Wordpress" 
          descricao="Criando sites com wordpress sem mexer em código" 
        />
        
        <CardGrande 
          imagem="https://www.amesolutions.co.uk/wp-content/uploads/2019/07/support-900x400.jpg" 
          nome="Suporte TI" 
          descricao="Formatando PC e reinstalando impressora.(brinks brinks huehue)" 
        />
      </div>
      <div className="page-section-container">
        <h2>Formação Técnica</h2>
        <CardGrande 
          imagem = "https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5efbb5055f2478ba2bc322d0_icone_gif.gif"
          nome="Labenu"
          descricao="Curso de Programador Front-end com React <3"
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
