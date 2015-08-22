import React from 'react';
import { connect } from 'react-redux';

import {
    startConsumer,
    stopConsumer
} from 'app/consumer-async-actions';

@connect(state => state.consumer)
export default class Consumer extends React.Component {

    componentWillMount() {
        this.props.dispatch(startConsumer());
    }

    componentWillUnmount() {
        this.props.dispatch(stopConsumer());
    }

    render() {

        var consumedTickets = this.props.consumedTickets.map(ticketId => (
            <li key={ticketId}>{ticketId}</li>
        ));

        return (
            <div>
                <p>Pending tickets: {this.props.pendingTickets}</p>
                <ol>{consumedTickets}</ol>
            </div>
        );
    }
}
