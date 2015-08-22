import React from 'react';
import { connect } from 'react-redux';

import { addTicket } from 'app/async-actions';
import Button from 'react-bootstrap/lib/Button';

@connect(state => state.client)
export default class Client extends React.Component {
    _addTicket = e => {
        this.props.dispatch(addTicket());
        e.target.blur();
    }
    render() {
        var { submittedTickets } = this.props;
        return (
            <div>
                <Button 
                    bsStyle="primary" 
                    bsSize="large" 
                    onClick={this._addTicket}
                    block >Add Ticket</Button>
                <p>Submitted Tickets: {submittedTickets}</p>
            </div>
        );
    }
}
