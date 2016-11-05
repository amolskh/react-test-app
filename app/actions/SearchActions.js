import dispatcher from '../dispatcher';

export function searchByQuery(query) {
    dispatcher.dispatch({
        type: "SEARCH_BY_QUERY",
        query: query
    });
}

export function searchByType(searchType) {
    dispatcher.dispatch({
        type: "SEARCH_BY_TYPE",
        searchType: searchType
    });
}