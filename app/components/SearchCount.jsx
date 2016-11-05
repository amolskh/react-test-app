import React from 'react';
import {SearchStore, SearchStoreEvents} from '../stores/SearchStore';

class SearchCount extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    componentWillMount() {
        SearchStore.on(SearchStoreEvents.SEARCH_COMPLETED, () => {
            this.setState({ count: SearchStore.getTotalResultsCount() });
        });
        SearchStore.on(SearchStoreEvents.SEARCH_FAILED, () => {
            this.setState({ count: SearchStore.getTotalResultsCount() });
        });
    }

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="counter">{this.state.count} items</li>
            </ul>
        );
    }
}

module.exports = SearchCount;