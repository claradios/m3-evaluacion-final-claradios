import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
            <React.Fragment>
                <div className="character-detail">
                    <h2 className="character-detail__name">{name}</h2>
                    <p className="character-detail__name">{status}</p>
                    <p className="character-detail__name">{species}</p>
                    <p className="character-detail__name">{origin.name}</p>
                    <p className="character-detail__name">{episode.length}</p>
                    <div className="character-detail__img"><img src={image} alt={name} /></div>
                </div>
                <Link to="/" className="app__back">Volver al listado</Link>
            </React.Fragment>
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