import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

class CharacterList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.api
                    .filter(item => item.name.toUpperCase().includes(this.props.search.toUpperCase()))
                    .map(item =>
                        <li key={item.id}>
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
}

CharacterList.propTypes = {
    api: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string.isRequired
}


export default CharacterList;