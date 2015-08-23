import React from 'react';
import { connect } from 'react-redux';

import {
    registerClient, 
    unregisterClient, 
    addTicket 
} from 'app/client-async-actions';

import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PageHeader from 'react-bootstrap/lib/PageHeader';

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

        const styles = {
            counter: {
                fontSize: 50,
                fontWeight: 'normal',
                marginBottom: 0
            }
        };

        if (pendingTickets < 0) {
            pendingTickets = 0;
        }

        return (
            <Grid fluid>
                <PageHeader>
                    Super Queue <small>client</small>
                </PageHeader>                
                <Row>
                    <Col xs={6}>
                        <Well className="text-center">
                            <b>Submitted Tickets</b>
                            <p style={styles.counter}>{submittedTickets}</p>
                        </Well>
                    </Col>
                    <Col xs={6}>
                        <Well className="text-center">
                            <b>Pending Tickets</b>
                            <p style={styles.counter}>{pendingTickets}</p>
                        </Well>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p>
                            <Button 
                                bsStyle="primary" 
                                bsSize="large" 
                                onClick={this._addTicket}
                                block>
                                Add Ticket
                            </Button>
                        </p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col xs={12}>
                        <p style={{fontStyle:'italic', fontSize:9.5}}>
                            ClientId: {clientId}
                        </p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
