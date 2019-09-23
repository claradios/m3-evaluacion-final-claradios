import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CharacterDetail.scss';

const CharacterDetail = props => {
    const { routerProps, api } = props;
    const characterId = parseInt(routerProps.match.params.characterId);

    if (characterId > api.length) {
        return (
            <div>
                <p>La página de detalle que estás buscando no existe o no está disponible</p>
                <Link to="/" className="app__back">Vuelve al la página principal</Link>
            </div>
        );
    }

    const character = api.filter(item => item.id === characterId);

    if (character[0]) {
        const { name, image, status, species, origin, episode } = character[0];
        return (
            <div className="detail__container">
                <Link to="/" className="app__back">>Volver</Link>
                <div className="character-detail">
                    <div className="character-detail-text">
                        <h2 className="character-detail__info">{name}</h2>
                        <p className="character-detail__info">{status}</p>
                        <p className="character-detail__info">{species}</p>
                        <p className="character-detail__info">{origin.name}</p>
                        <p className="character-detail__info">{episode.length}</p>
                    </div>
                    <div className="character-detail__img-ct"><img className="character-detail__img" src={image} alt={name} /></div>
                </div>                
            </div>
        );
    } else {
        return (
            <React.Fragment>
                <p>La página no existe, pero puedes volver al listado</p>
                <Link to="/" className="app__back">Volver</Link>
            </React.Fragment>
        );
    }
};

CharacterDetail.propTypes = {
    routerProps: PropTypes.object.isRequired,
    api: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterDetail;