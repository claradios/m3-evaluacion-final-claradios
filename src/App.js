import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import { fetchCharacters } from './services/fetchCharacters';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

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

