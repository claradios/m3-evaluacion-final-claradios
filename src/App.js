import React from 'react';
import './App.css';
import {fetchCharacters} from './services/fetchCharacters';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api : []
    }
  }

  componentDidMount(){
    this.getCharacters();
  }
  getCharacters(){
    fetchCharacters()
    .then(data=>{
      this.setState({
        api:data.results
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.api.map(item=>
            <li>{item.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
