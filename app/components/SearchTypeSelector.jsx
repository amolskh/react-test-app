import React from 'react';
import * as SearchActions from '../actions/SearchActions.js';
import {SearchStore, SearchStoreEvents} from '../stores/SearchStore';

class SearchTypeSelector extends React.Component {
    constructor() {
        super();
        this.searchTypes = [{
            key: 'album', value: 'Album'
        }, { key: 'artist', value: 'Artist' },
            { key: 'playlist', value: 'Playlist' },
            { key: 'track', value: 'Track' }];
    }

    componentWillMount() {
        SearchStore.on(SearchStoreEvents.SEARCH_COMPLETED, () => {
            this.setState({ count: SearchStore.getTotalResultsCount() });
        });
        SearchStore.on(SearchStoreEvents.SEARCH_FAILED, () => {
            this.setState({ count: SearchStore.getTotalResultsCount() });
        });
    }

    changeSearchType(selectedSearchType) {
        SearchActions.searchByType(selectedSearchType);
    }

    render() {
        const searchTypeSelectorInst = this;
        return (
            <ul className="nav navbar-nav">
                <li className="dropdown active">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filter <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        {this.searchTypes.map(function (searchType, index) {
                            return <li key={index} onClick={searchTypeSelectorInst.changeSearchType.bind(searchTypeSelectorInst, searchType.key) }><a href="#">{searchType.value}</a></li>;
                        }) }
                    </ul>
                </li>
            </ul>
        );
    }
}

module.exports = SearchTypeSelector;