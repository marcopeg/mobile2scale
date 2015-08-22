import React from 'react';
import { connect } from 'react-redux';

@connect(state => state)
export default class Consumer extends React.Component {
    render() {
        return <div>consumer</div>;
    }
}
