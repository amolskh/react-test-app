import React from 'react';
import SearchItem from './SearchItem.jsx';
import {SearchStore, SearchStoreEvents} from '../stores/SearchStore';

class SearchResults extends React.Component {

    constructor() {
        super();
        this.state = { searchResults: [] }
    }

    componentWillMount() {
        SearchStore.on(SearchStoreEvents.SEARCH_COMPLETED, () => {
            this.setState({ searchResults: SearchStore.getSearchResults(), noRecords: false });
            if (this.state.searchResults && this.state.searchResults.length === 0) {
                if (SearchStore.getSearchQuery() === "") {
                    this.setState({ noRecords: true });
                }
            }
        });
        SearchStore.on(SearchStoreEvents.SEARCH_FAILED, () => {
            this.setState({ searchResults: [], noRecords: true });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                    <ul className="results">
                        {this.state.searchResults.map(function (item, index) {
                            return <SearchItem key={ item.id } item={item}/>;
                        }) }
                    </ul>
                    {this.state.noRecords ? < p > No Records to Display </p> : null}
                </div>
            </div >
        );
    }
}

module.exports = SearchResults;