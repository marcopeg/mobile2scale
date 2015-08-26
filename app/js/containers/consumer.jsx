import React from 'react';
import { connect } from 'react-redux';

import {
    registerConsumer,
    unregisterConsumer
} from 'actions/consumer-async';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

@connect(state => state.consumer)
export default class Consumer extends React.Component {

    componentWillMount() {
        this.props.dispatch(registerConsumer());
    }

    componentWillUnmount() {
        this.props.dispatch(unregisterConsumer());
    }

    render() {

        const styles = {
            counter: {
                fontSize: 30,
                fontWeight: 'normal',
                marginBottom: 0
            },
            counterLabel: {
                fontWeight: 'bold',
                lineHeight: '50px'
            }
        };

        var consumedTickets = this.props.consumedTickets.map(ticketId => (
            <ListGroupItem key={ticketId}>
                {ticketId}
            </ListGroupItem>
        ));

        consumedTickets.reverse();

        return (
            <Grid fluid>
                <PageHeader>
                    Consumer <small>- Super Queue</small>
                </PageHeader>                
                <Well>
                    <Grid fluid>
                        <Row>
                            <Col xs={10} style={styles.counterLabel}>Pending tickets:</Col>
                            <Col xs={2} style={styles.counter}>{this.props.pendingTickets}</Col>
                        </Row>
                    </Grid>
                </Well>
                <ListGroup>{consumedTickets}</ListGroup>
            </Grid>
        );
    }
}
