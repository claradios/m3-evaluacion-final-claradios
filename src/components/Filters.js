import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

class Filters extends React.Component {
    render() {
        return (
            <div className="app__search_containter">
                <label className="app__search-label" htmlFor="inputSearch">introduce tu búsqueda</label>
                <input className="app__search" type="text" value={this.props.search} onChange={this.props.handleChange} placeholder="rick"></input>
            </div>
        );
    }
}

Filters.propTypes = {
    search: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}


export default Filters;