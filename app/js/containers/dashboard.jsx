import React from 'react';
import { connect } from 'react-redux';

@connect(state => state)
export default class Dashboard extends React.Component {
    render() {
        console.log(this.props);
        return <div>dashboard</div>;
    }
}
