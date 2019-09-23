import React, {Fragment} from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {search, api, handleChange} = props;

  return (
    <Fragment>
      <Filters 
        search={search} 
        handleChange={handleChange}
        ></Filters> 
        <CharacterList 
        api = {api} 
        search={search}
        ></CharacterList>
    </Fragment>
  );
};

Home.propTypes = {
  handleChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  api: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Home;