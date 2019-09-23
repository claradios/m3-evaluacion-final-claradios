import React from 'react';
import './App.css';
import { fetchCharacters } from './services/fetchCharacters';
import CharacterList from './components/CharacterList'
import PropTypes from 'prop-types';
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
        <label htmlFor="inputSearch">introduce tu búsqueda</label>
        <input type="text" value={this.state.search} onChange={this.handleChange}></input>
        <CharacterList api = {this.state.api} search={this.state.search}></CharacterList>
        <ul>
          {this.state.api
          .filter(item=> item.name.toUpperCase().includes(this.state.search.toUpperCase()))
          .map(item =>
            <li key = {item.id}>
              <div>
                <h2>{item.name}</h2>
                <p>{item.species}</p>
                <div><img src={item.image} alt={`portrait of ${item.name}`}></img></div>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
