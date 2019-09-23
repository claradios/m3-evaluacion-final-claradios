import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
    render() {
        return (
            <div className="search__containter">
                <label htmlFor="inputSearch">introduce tu búsqueda</label>
                <input type="text" value={this.props.search} onChange={this.props.handleChange}></input>
            </div>
        );
    }
}

Filters.propTypes = {
    search: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}


export default Filters;