import React from 'react';
import './App.css';
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

  handleChange(event){
    const value = event.currentTarget.value;
    this.setState ({
      search: value
    })
  }

  render() {
    return (
      <div className="App">
        <Filters 
        search={this.state.search} 
        handleChange={this.handleChange}
        ></Filters> 
        <CharacterList 
        api = {this.state.api} 
        search={this.state.search}
        ></CharacterList>
      </div>
    );
  }
}

export default App;
