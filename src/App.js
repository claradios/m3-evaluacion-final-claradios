import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import { fetchCharacters } from './services/fetchCharacters';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCharacters();
  }
  getCharacters() {

    fetchCharacters()
      .then(data => {

        this.setState({
          api: data.results
        })
      })
  }

  handleChange(event) {
    const value = event.currentTarget.value;
    this.setState({
      search: value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div className="header__container">            
            <img className="header__img" src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Rick and Morty Logo"></img>
          </div>
        </header>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Home
                search={this.state.search}
                handleChange={this.handleChange}
                api={this.state.api}
              />
            );
          }} />
          <Route path="/character-detail/:characterId" render={routerProps => {
            return (
              <CharacterDetail
                routerProps={routerProps}
                api={this.state.api}
              />
            );
          }} />
        </Switch>
      </div>
    );
  }
}

export default App;

