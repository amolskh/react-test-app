import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <SearchBar/>
                <SearchResults/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));