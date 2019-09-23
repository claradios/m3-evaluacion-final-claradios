import React from 'react';
import PropTypes from 'prop-types';

class CharacterList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.api
                    .filter(item => item.name.toUpperCase().includes(this.props.search.toUpperCase()))
                    .map(item =>
                        <li key={item.id}>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.species}</p>
                                <div><img src={item.image} alt={`portrait of ${item.name}`}></img></div>
                            </div>
                        </li>
                    )}
            </ul>);
    }
}


export default CharacterList;