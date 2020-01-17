import React, {useState} from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da app
// Propriedade: Informações que um componente pai passa para o com filho
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)



function App() {

  return (
   <div id="app">
     <aside>
      <strong>Cadastrar</strong>
      <form>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="username_github"></input>
        </div>

        <div class="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs"></input>
        </div>

        <div className="input-group">
          <div class="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input name="latitude" id="latitude"></input>
          </div>
          <div class="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input name="longitude" id="longitude"></input>
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
     </aside>
     <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37482325?s=460&v=4" alt="José Eugênio"/>
              <div className="user-info">
                <strong>José Eugênio</strong>
                <span>C++, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Graduando em Análise e Desenvolvimento de sistemas pela Faculdade vale do salgado, participo de projetos como a Fabrica de Software que visa a integração de alunos ao mercado, desenvolvendo sistemas para clientes reais. grande experiencia em Segurança da Informação estudo a muito tempo essa área, alem de programação ser meu ponto mais forte. sempre foi o meu maior interesse desenvolver sistemas diversos para as mais diversas situações. </p>
            <a href="https://github.com/J-Eugenio">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37482325?s=460&v=4" alt="José Eugênio"/>
              <div className="user-info">
                <strong>José Eugênio</strong>
                <span>C++, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Graduando em Análise e Desenvolvimento de sistemas pela Faculdade vale do salgado, participo de projetos como a Fabrica de Software que visa a integração de alunos ao mercado, desenvolvendo sistemas para clientes reais. grande experiencia em Segurança da Informação estudo a muito tempo essa área, alem de programação ser meu ponto mais forte. sempre foi o meu maior interesse desenvolver sistemas diversos para as mais diversas situações. </p>
            <a href="https://github.com/J-Eugenio">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37482325?s=460&v=4" alt="José Eugênio"/>
              <div className="user-info">
                <strong>José Eugênio</strong>
                <span>C++, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Graduando em Análise e Desenvolvimento de sistemas pela Faculdade vale do salgado, participo de projetos como a Fabrica de Software que visa a integração de alunos ao mercado, desenvolvendo sistemas para clientes reais. grande experiencia em Segurança da Informação estudo a muito tempo essa área, alem de programação ser meu ponto mais forte. sempre foi o meu maior interesse desenvolver sistemas diversos para as mais diversas situações. </p>
            <a href="https://github.com/J-Eugenio">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37482325?s=460&v=4" alt="José Eugênio"/>
              <div className="user-info">
                <strong>José Eugênio</strong>
                <span>C++, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>Graduando em Análise e Desenvolvimento de sistemas pela Faculdade vale do salgado, participo de projetos como a Fabrica de Software que visa a integração de alunos ao mercado, desenvolvendo sistemas para clientes reais. grande experiencia em Segurança da Informação estudo a muito tempo essa área, alem de programação ser meu ponto mais forte. sempre foi o meu maior interesse desenvolver sistemas diversos para as mais diversas situações. </p>
            <a href="https://github.com/J-Eugenio">Acessar perfil no Github</a>
          </li>
        </ul>
     </main>
   </div>
  );
}

export default App;
