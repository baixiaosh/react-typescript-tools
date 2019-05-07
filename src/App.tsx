import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import RouteIndex from './route';

import logo from './logo.svg';
import './App.less';

import betaAction from './redux/action/beta';

interface IProps {
    beta?: any;
    dispatch?: Dispatch;
}

class App extends Component<IProps, {}> {
    componentDidMount() {
        console.log(this.props);
    }
    handleClick() {
        const dispatch = this.props.dispatch;
        if (dispatch) {
            dispatch(betaAction.betaChange());
        }
    }
    render() {
        const { beta } = this.props;
        console.log(beta);
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
                        <button onClick={this.handleClick.bind(this)}>change</button>
                        <div>beta:{beta.text}</div>
                    </header>
                    <RouteIndex />
                </Router>
            </div>
        );
    }
}

export default connect(state => state)(App);
