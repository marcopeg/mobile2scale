import React from 'react';
import { connect } from 'react-redux';

import {
    registerClient, 
    unregisterClient, 
    addTicket 
} from 'app/client-async-actions';

import Button from 'react-bootstrap/lib/Button';

@connect(state => state.client)
export default class Client extends React.Component {
    
    componentWillMount() {
        if (!this.props.clientId) {
            this.props.dispatch(registerClient());
        }
    }

    componentWillUnmount() {
        this.props.dispatch(unregisterClient(this.props.clientId));
    }

    _addTicket = e => {
        this.props.dispatch(addTicket(this.props.clientId));
        e.target.blur();
    }

    render() {
        var { clientId, submittedTickets, pendingTickets } = this.props;

        if (!clientId) {
            return (
                <p>registering client...</p>
            );
        }

        return (
            <div>
                <Button 
                    bsStyle="primary" 
                    bsSize="large" 
                    onClick={this._addTicket}
                    block >Add Ticket</Button>
                <p>ClientId: {clientId}</p>
                <p>Submitted Tickets: {submittedTickets}</p>
                <p>Pending Tickets: {pendingTickets}</p>
            </div>
        );
    }
}
