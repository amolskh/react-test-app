import React from 'react';
import * as SearchActions from '../actions/SearchActions.js';
import { SearchStore, SearchStoreEvents } from '../stores/SearchStore';

class SearchBar extends React.Component {

    constructor() {
        super();
        this.state = { query: SearchStore.getSearchQuery(), seachFieldOptn: {} };
    }

    componentWillMount() {
        SearchStore.on(SearchStoreEvents.SEARCH_COMPLETED, () => {
            this.setState({ searching: false, failure: undefined });
        });
        SearchStore.on(SearchStoreEvents.SEARCH_FAILED, () => {
            this.setState({ searching: false, failure: SearchStore.getFailureReason() });
        });
    }

    changeSearchQuery(e) {
        this.setState({ query: e.target.value });
    }

    search() {
        if (!this.state.searching) {
            this.setState({ searching: true });
            SearchActions.searchByQuery(this.state.query);
        }
    }

    render() {
        var opts = {};
        if (this.state.searching) {
            opts['readOnly'] = 'readOnly';
        }
        return (
            <div className="container">
                <form className="form-horizontal">
                    <div className="form-group form-group-lg">
                        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                            <input {...opts} className="form-control" value={this.state.query} onChange={this.changeSearchQuery.bind(this)} type="text" id="formGroupInputLarge" placeholder="Search..." />
                            <a className="search-icon" href="#" onClick={this.search.bind(this)}><i className="fa fa-search" aria-hidden="true"></i></a>
                            <p className="error">{this.state.failure}</p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



module.exports = SearchBar;