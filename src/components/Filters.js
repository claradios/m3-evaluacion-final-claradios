import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

const Filters = props => {
   const {search, handleChange, handleChangeEpisode} = props;
        return (
            <div className="app__search_containter">
                <label className="app__search-label" htmlFor="inputSearch">introduce tu búsqueda</label>
                <input className="app__search" type="text" value={search} onChange={handleChange} placeholder="rick"/>
                <label>introduce el número de capítulos</label>
                <input id="chapter" type="number" name="chapter" onChange={handleChangeEpisode}/>
            </div>
        );    
}

Filters.propTypes = {
    search: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeEpisode: PropTypes.func.isRequired
}


export default Filters;