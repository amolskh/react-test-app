import dispatcher from '../dispatcher';

export function searchByQuery(query) {
    dispatcher.dispatch({
        type: "SEARCH_BY_QUERY",
        query
    });
}

export function searchByType(searchType) {
    dispatcher.dispatch({
        type: "SEARCH_BY_TYPE",
        searchType
    });
}

export function searchByTypeAndQuery(query, searchType) {
    dispatcher.dispatch({
        type: "SEARCH_BY_TYPE_AND_QUERY",
        searchType,
        query
    });
}