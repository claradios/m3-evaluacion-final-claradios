import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import './CharacterList.scss'

const CharacterList = props => {
    const {api, search} = props;
    return (
        <ul className="app__list">
            {api
                .filter(item => item.name.toUpperCase().includes(search.toUpperCase()))
                .map(item =>
                    <li className="app__character" key={item.id}>
                        <Link to={`/character-detail/${item.id}`} className="character__link">
                            <CharacterCard
                                name={item.name}
                                species={item.species}
                                image={item.image}
                            ></CharacterCard>
                        </Link>
                    </li>
                )}
        </ul>);

}

CharacterList.propTypes = {
    api: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string.isRequired
}


export default CharacterList;