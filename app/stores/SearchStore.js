import { EventEmitter } from "events";
import dispatcher from '../dispatcher';

const SEARCH_API_URL = 'https://api.spotify.com/v1/search';

const SearchStoreEvents = {
    SEARCH_IN_PROGRESS: "SEARCH_IN_PROGRESS",
    SEARCH_COMPLETED: "SEARCH_COMPLETED",
    SEARCH_FAILED: "SEARCH_FAILED"
}

class SearchStore extends EventEmitter {
    constructor() {
        super();
        this.searchResults = [];
        this.totalResultsCount = 0;
        this.searchQuery = '';
        this.searchType = 'artist';
        this.failure = '';
    }

    searchResultsForQuery() {
        this.failure = '';
        this.searchResults = [];
        this.totalResultsCount = 0;
        if (!this.searchQuery) {
            this.failure = 'Please enter search Query';
            this.emit(SearchStoreEvents.SEARCH_FAILED);
            return;
        }
        this.emit(SearchStoreEvents.SEARCH_IN_PROGRESS);
        let searchUrl = `${SEARCH_API_URL}?q=${encodeURI(this.searchQuery)}&type=${this.searchType}`;
        fetch(searchUrl).then((response) => response.json())
            .then((responseJSON) => {
                this.searchResults = responseJSON.artists.items;
                this.totalResultsCount = responseJSON.artists.total;
                this.emit(SearchStoreEvents.SEARCH_COMPLETED);
            }).catch(() => {
                this.emit(SearchStoreEvents.SEARCH_FAILED);
            });
    }

    getSearchResults() {
        return this.searchResults;
    }

    getSearchQuery() {
        return this.searchQuery;
    }

    getTotalResultsCount() {
        return this.totalResultsCount;
    }

    getFailureReason() {
        return this.failure;
    }

    handleActions(actions) {
        if (actions.type == 'SEARCH_BY_QUERY') {
            this.searchQuery = actions.query;
            this.searchResultsForQuery();
        } else if (actions.type == 'SEARCH_BY_TYPE') {
            this.searchType = actions.searchType;
            this.searchResultsForQuery();
        } else if (actions.type == 'SEARCH_BY_TYPE_AND_QUERY') {
            if (actions.searchType) {
                this.searchType = actions.searchType;
            }
            if (actions.query) {
                this.searchQuery = actions.query;
            }
            this.searchResultsForQuery();
        }
    }
}


const searchStore = new SearchStore();
dispatcher.register(searchStore.handleActions.bind(searchStore));

module.exports = {
    SearchStoreEvents,
    SearchStore: searchStore
}