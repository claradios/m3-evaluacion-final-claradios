import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CharacterDetail = props => {
  const {routerProps, api} = props;
  const characterId = parseInt(routerProps.match.params.characterId);

  if (characterId > api.length) {
    return (
      <div>
      <p>Mira, mira, que es viernes y me estas.. </p>
      <Link to="/" className="app__back">Vuelve al listado, listo :)</Link>
      </div>
    );
  }
  
  const character = api.filter(item => item.id === characterId);

  if (character[0]) {
  const {name, image, status} = character[0];
    return (
      <React.Fragment>
        <div className="character-detail">
          <h2 className="character-detail__name">{name}</h2>
          <div className="character-detail__img">
            <img src={image} alt={name}/>
          </div>
        <p className="character-detail__status">{status}</p>
        </div>
        <Link to="/" className="app__back">Volver al listado</Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Chacho, ese no lo tienes</p>
        <Link to="/" className="app__back">Volver al listado</Link>
      </React.Fragment>
    );
  }
};

CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  api: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterDetail;