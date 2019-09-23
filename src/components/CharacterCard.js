import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.species}</p>
                <div><img src={this.props.image} alt={`portrait of ${this.props.name}`}></img></div>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}


export default CharacterCard;