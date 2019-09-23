import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.scss'

class CharacterCard extends React.Component {
    render() {
        return (
            <div className="card__container">
                <div className="card_info-container">
                <h2 className="card__title">{this.props.name}</h2>
                <p className="card__species">{this.props.species}</p>
                </div>
                <div className="card__img-container">
                    <img className="card__img" src={this.props.image} alt={`portrait of ${this.props.name}`}></img>
                </div>
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