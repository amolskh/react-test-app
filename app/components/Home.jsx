import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import * as SearchActions from '../actions/SearchActions.js';

class Home extends React.Component {
    componentWillMount() {
        if (this.props.location && this.props.location.query) {
            const queryParam = this.props.location.query;
            const query = queryParam.query;
            const searchType = queryParam.searchType;
            SearchActions.searchByTypeAndQuery(query, searchType);
        }
    }
    render() {
        return (
            <div>
                <Nav />
                <SearchBar />
                <SearchResults />
            </div>
        );
    }
}

module.exports = Home;