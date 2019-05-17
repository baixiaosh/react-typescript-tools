import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

@(withRouter as any)
class Index extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return <div>test</div>;
    }
}
export default Index;
