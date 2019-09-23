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
                        <h3 className="character-detail__title">{name}</h3>
                        <ul className="character-detail__characteristics">
                            <li className="character-detail__item">
                                <p className="character-detail__info">status:<span className="ch-det__answer"> {status}</span>
                                    {status === 'Dead' ? <span className="icon-container"> <i className="fas fa-skull-crossbones"></i></span> : null}
                                </p>
                            </li>
                            <li>
                                <p className="character-detail__info">species:<span className="ch-det__answer"> {species}</span>
                                    {species === 'Human' ? <span className="icon-container"> <i class="fas fa-user"></i></span>
                                        : <span className="icon-container"> <i class="fab fa-reddit-alien"></i></span>}
                                </p>
                            </li>
                            <li>
                                <p className="character-detail__info">origin:<span className="ch-det__answer"> {origin.name}</span></p>
                            </li>
                            <li>
                                <p className="character-detail__info">episodes:<span className="ch-det__answer"> {episode.length}</span></p>
                            </li>
                        </ul>











                        {/* <span className="icon-container"> <i class="fas fa-user"></i></span>
                            <span className="icon-container"><i class="fab fa-reddit-alien"></i></span> */}

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