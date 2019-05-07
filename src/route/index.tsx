import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';

function Loading() {
    return <div>Loading...</div>;
}

const Index = Loadable({
    loader: () => import('../page/Index'),
    loading: Loading
});

const Home = Loadable({
    loader: () => import('../page/Home'),
    loading: Loading
});

class RoutesIndex extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/home" component={Home} />
            </Switch>
        );
    }
}

export default hot(module)(RoutesIndex);
