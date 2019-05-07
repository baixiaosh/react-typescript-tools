import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import RouteIndex from './route';

import logo from './logo.svg';
import './App.less';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Link className="App-link" to="/home">
                        link
                    </Link>
                </header>
                <RouteIndex />
            </Router>
        </div>
    );
};

export default App;
