import React from 'react';
import SearchCount from './SearchCount.jsx';
import SearchTypeSelector from './SearchTypeSelector.jsx';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="navbar-brand" href="#"><i className="fa fa-rebel" aria-hidden="true"></i></div>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <SearchTypeSelector/>
                            <SearchCount/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

module.exports = Nav;